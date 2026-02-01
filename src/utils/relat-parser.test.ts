/**
 * relat parser tests (vitest)
 */
import { describe, it, expect } from 'vitest';
import { parseRelat } from './relat-parser';

describe('parseRelat', () => {
  it('1) edge without spaces: Foo-->Bar', () => {
    const ir = parseRelat('Foo-->Bar');
    expect(Object.keys(ir.nodes)).toHaveLength(2);
    expect(ir.nodes.Foo).toEqual({ id: 'Foo', label: 'Foo', group: undefined, style: undefined });
    expect(ir.nodes.Bar).toEqual({ id: 'Bar', label: 'Bar', group: undefined, style: undefined });
    expect(ir.edges).toHaveLength(1);
    expect(ir.edges[0]).toEqual({ from: 'Foo', to: 'Bar', relId: undefined, label: undefined, style: undefined });
    expect(ir.groups).toEqual({});
  });

  it('2) edge with spaces: Foo --> Bar equals Foo-->Bar', () => {
    const irNoSpace = parseRelat('Foo-->Bar');
    const irWithSpace = parseRelat('Foo --> Bar');
    expect(irNoSpace.nodes).toEqual(irWithSpace.nodes);
    expect(irNoSpace.edges).toHaveLength(1);
    expect(irWithSpace.edges).toHaveLength(1);
    expect(irNoSpace.edges[0].from).toBe(irWithSpace.edges[0].from);
    expect(irNoSpace.edges[0].to).toBe(irWithSpace.edges[0].to);
  });

  it('3) group block: HongKong { Foo Bar }', () => {
    const ir = parseRelat('HongKong {\n  Foo\n  Bar\n}\nFoo-->Bar');
    expect(ir.nodes.Foo).toBeDefined();
    expect(ir.nodes.Foo?.group).toBe('HongKong');
    expect(ir.nodes.Bar).toBeDefined();
    expect(ir.nodes.Bar?.group).toBe('HongKong');
    expect(ir.groups.HongKong).toBeDefined();
    expect(ir.groups.HongKong?.members).toEqual(['Foo', 'Bar']);
    expect(ir.edges).toHaveLength(1);
  });

  it('3b) group with node style in block: Japan { Tokyo [color=#ff0000] }', () => {
    const ir = parseRelat('Japan { Tokyo [color=#ff0000] }');
    expect(ir.nodes.Tokyo).toBeDefined();
    expect(ir.nodes.Tokyo?.group).toBe('Japan');
    expect(ir.nodes.Tokyo?.style).toEqual({ color: '#ff0000' });
    expect(ir.groups.Japan?.members).toEqual(['Tokyo']);
  });

  it('3c) group with mixed node style: Japan { Tokyo [color=#ff0000], Osaka [color=#00aa00], Kyoto }', () => {
    const ir = parseRelat('Japan { Tokyo [color=#ff0000], Osaka [color=#00aa00], Kyoto }');
    expect(ir.nodes.Tokyo?.group).toBe('Japan');
    expect(ir.nodes.Tokyo?.style).toEqual({ color: '#ff0000' });
    expect(ir.nodes.Osaka?.group).toBe('Japan');
    expect(ir.nodes.Osaka?.style).toEqual({ color: '#00aa00' });
    expect(ir.nodes.Kyoto?.group).toBe('Japan');
    expect(ir.nodes.Kyoto?.style).toBeUndefined();
    expect(ir.groups.Japan?.members).toEqual(['Tokyo', 'Osaka', 'Kyoto']);
  });

  it('3d) nested group (omit group keyword): World { Japan { Tokyo } }', () => {
    const ir = parseRelat('World { Japan { Tokyo } }');
    expect(ir.groups.World?.members).toEqual(['Japan']);
    expect(ir.groups.Japan?.members).toEqual(['Tokyo']);
    expect(ir.nodes.Tokyo?.group).toBe('Japan');
  });

  it('3e) nested group (explicit group keyword): group World { group Japan { Tokyo } }', () => {
    const ir = parseRelat('group World { group Japan { Tokyo } }');
    expect(ir.groups.World?.members).toEqual(['Japan']);
    expect(ir.groups.Japan?.members).toEqual(['Tokyo']);
    expect(ir.nodes.Tokyo?.group).toBe('Japan');
  });

  it('3f) nested group with multiple siblings: World { Japan { Tokyo }, Europe { London, Paris } }', () => {
    const ir = parseRelat('World { Japan { Tokyo }, Europe { London, Paris } }');
    expect(ir.groups.World?.members).toEqual(['Japan', 'Europe']);
    expect(ir.groups.Japan?.members).toEqual(['Tokyo']);
    expect(ir.groups.Europe?.members).toEqual(['London', 'Paris']);
  });

  it('4) explicit node: node NodeID', () => {
    const ir = parseRelat('node NodeID');
    expect(ir.nodes.NodeID).toEqual({ id: 'NodeID', label: 'NodeID', group: undefined, style: undefined });
  });

  it('5) node with label: node NodeID as "Node Label"', () => {
    const ir = parseRelat('node NodeID as "Node Label"');
    expect(ir.nodes.NodeID).toEqual({ id: 'NodeID', label: 'Node Label', group: undefined, style: undefined });
  });

  it('5b) numeric node IDs: 1 as "Tokyo", 2 as "NY", 1-->2', () => {
    const ir = parseRelat('1 as "Tokyo" [lat=35.68]\n2 as "NY" [lat=40.71]\n1-->2 : link');
    expect(ir.nodes['1']).toBeDefined();
    expect(ir.nodes['1']?.id).toBe('1');
    expect(ir.nodes['1']?.label).toBe('Tokyo');
    expect(ir.nodes['2']).toBeDefined();
    expect(ir.nodes['2']?.id).toBe('2');
    expect(ir.nodes['2']?.label).toBe('NY');
    expect(ir.edges[0]).toMatchObject({ from: '1', to: '2' });
  });

  it('6) edge with label (backward compat): A-->B : "causes"', () => {
    const ir = parseRelat('A-->B : "causes"');
    expect(ir.edges[0].relId).toBe('causes');
    expect(ir.edges[0].label).toBe('causes');
  });

  it('6b) edge with relID: A-->B : flight', () => {
    const ir = parseRelat('A-->B : flight');
    expect(ir.edges[0].relId).toBe('flight');
    expect(ir.edges[0].label).toBeUndefined();
  });

  it('6c) edge with relID as display: Tokyo-->NewYork : f as "flight"', () => {
    const ir = parseRelat('Tokyo-->NewYork : f as "flight"');
    expect(ir.edges[0].relId).toBe('f');
    expect(ir.edges[0].label).toBe('flight');
  });

  it('6d) edge relID with style: A-->B : flight [color=#f00, label="Flight"]', () => {
    const ir = parseRelat('A-->B : flight [color=#f00, label="Flight"]');
    expect(ir.edges[0].relId).toBe('flight');
    expect(ir.edges[0].label).toBeUndefined();
    expect(ir.edges[0].style).toEqual({ color: '#f00', label: 'Flight' });
  });

  it('7) node with style: Foo[color=red]', () => {
    const ir = parseRelat('Foo[color=red]');
    expect(ir.nodes.Foo?.style).toEqual({ color: 'red' });
  });

  it('7b) node with lat, lon, info: Tokyo[lat=35.68, lon=139.69, info.country=Japan]', () => {
    const ir = parseRelat('Tokyo[lat=35.68, lon=139.69, info.country=Japan]');
    expect(ir.nodes.Tokyo?.style).toMatchObject({ lat: 35.68, lon: 139.69, 'info.country': 'Japan' });
  });

  it('7b-backward) node with latitude, longitude still parsed: Tokyo[latitude=35.68, longitude=139.69]', () => {
    const ir = parseRelat('Tokyo[latitude=35.68, longitude=139.69]');
    expect(ir.nodes.Tokyo?.style).toMatchObject({ latitude: 35.68, longitude: 139.69 });
  });

  it('7c) edge with weight and info: A-->B : flight [weight=2, info.distance=1000]', () => {
    const ir = parseRelat('A-->B : flight [weight=2, info.distance=1000]');
    expect(ir.edges[0].relId).toBe('flight');
    expect(ir.edges[0].style).toMatchObject({ weight: 2, 'info.distance': 1000 });
  });

  it('7d) group with info: G[info.region=Asia] { A B }', () => {
    const ir = parseRelat('G[info.region=Asia] { A B }');
    expect(ir.groups.G?.style).toMatchObject({ 'info.region': 'Asia' });
  });

  it('8) comments are ignored: // and # and /* */', () => {
    const ir = parseRelat('// comment\nFoo-->Bar\n# hash\nBaz\n/* block */ Woo');
    expect(ir.nodes.Foo).toBeDefined();
    expect(ir.nodes.Bar).toBeDefined();
    expect(ir.nodes.Baz).toBeDefined();
    expect(ir.nodes.Woo).toBeDefined();
    expect(ir.edges).toHaveLength(1);
  });

  it('9) missing } produces warning', () => {
    const ir = parseRelat('HongKong { Foo Bar');
    expect(ir.warnings.some((w) => w.includes('Missing') && w.includes('}'))).toBe(true);
    expect(ir.groups.HongKong?.members).toContain('Foo');
    expect(ir.groups.HongKong?.members).toContain('Bar');
  });

  it('10) edge with style: A-->B[color=gray,width=2]', () => {
    const ir = parseRelat('A-->B[color=gray,width=2]');
    expect(ir.edges[0].style).toEqual({ color: 'gray', width: 2 });
  });

  it('11) group with style: G[color=#00aaff] { A B }', () => {
    const ir = parseRelat('G[color=#00aaff] { A B }');
    expect(ir.groups.G?.style).toEqual({ color: '#00aaff' });
    expect(ir.groups.G?.members).toEqual(['A', 'B']);
  });

  it('12) standalone node ID (implicit node)', () => {
    const ir = parseRelat('Woo');
    expect(ir.nodes.Woo).toEqual({ id: 'Woo', label: 'Woo', group: undefined, style: undefined });
  });

  it('13) GroupID as "label" { ... } (only id as "label" supported)', () => {
    const ir = parseRelat('HongKong as "Hong Kong" { Foo Bar }');
    expect(ir.groups.HongKong?.label).toBe('Hong Kong');
    expect(ir.groups.HongKong?.members).toEqual(['Foo', 'Bar']);
  });

  it('13b) GroupID as "label" { ... }: group label', () => {
    const ir = parseRelat('Earth as "The Earth" { Japan { Tokyo } }');
    expect(ir.groups.Earth?.id).toBe('Earth');
    expect(ir.groups.Earth?.label).toBe('The Earth');
    expect(ir.groups.Earth?.members).toEqual(['Japan']);
    expect(ir.groups.Japan?.members).toEqual(['Tokyo']);
  });

  it('13c) NodeID as "label" in group block', () => {
    const ir = parseRelat('Japan { Tokyo as "Tokyo-city", Osaka }');
    expect(ir.nodes.Tokyo?.id).toBe('Tokyo');
    expect(ir.nodes.Tokyo?.label).toBe('Tokyo-city');
    expect(ir.nodes.Osaka?.label).toBe('Osaka');
    expect(ir.groups.Japan?.members).toEqual(['Tokyo', 'Osaka']);
  });

  it('13d) multiple group membership: same node in multiple groups', () => {
    const ir = parseRelat('Earth as "The Earth" { Japan { Tokyo as "Tokyo-city", Osaka }, Australia { Sydney, Melbourne } }\nsyster { Osaka, Melbourne }');
    expect(ir.groups.Earth?.label).toBe('The Earth');
    expect(ir.groups.Japan?.members).toEqual(['Tokyo', 'Osaka']);
    expect(ir.groups.Australia?.members).toEqual(['Sydney', 'Melbourne']);
    expect(ir.groups.syster?.members).toEqual(['Osaka', 'Melbourne']);
    expect(ir.nodes.Tokyo?.label).toBe('Tokyo-city');
    expect(ir.nodes.Osaka?.label).toBe('Osaka');
  });

  it('14) same node ID twice merges style, label last wins', () => {
    const ir = parseRelat('Foo[color=red]\nFoo[width=2]\nFoo\nFoo as "Final"');
    expect(ir.nodes.Foo?.label).toBe('Final');
    expect(ir.nodes.Foo?.style).toEqual({ color: 'red', width: 2 });
  });

  it('15) minimum valid input: group + edges', () => {
    const ir = parseRelat('HongKong {\n  Foo\n  Bar\n}\nFoo-->Bar\nWoo-->Foo');
    expect(Object.keys(ir.nodes).sort()).toEqual(['Bar', 'Foo', 'Woo']);
    expect(ir.groups.HongKong?.members).toEqual(['Foo', 'Bar']);
    expect(ir.edges).toHaveLength(2);
  });

  describe('layout block (bracket-wrapped to avoid newline/comma ambiguity)', () => {
    it('16) node position: node ID {x=num y=num}', () => {
      const ir = parseRelat('Foo\nBar\nlayout { node Foo {x=100 y=200} node Bar {x=300 y=200} }');
      expect(ir.layout?.nodes?.Foo).toEqual({ x: 100, y: 200 });
      expect(ir.layout?.nodes?.Bar).toEqual({ x: 300, y: 200 });
    });

    it('17) node position with fixed: node ID {x=num y=num fixed}', () => {
      const ir = parseRelat('Foo\nlayout { node Foo {x=50 y=50 fixed} }');
      expect(ir.layout?.nodes?.Foo).toEqual({ x: 50, y: 50, fixed: true });
    });

    it('17b) node layout with w and h: node ID {x= y= w= h=}', () => {
      const ir = parseRelat('Foo\nlayout { node Foo {x=100 y=120 w=200 h=80} }');
      expect(ir.layout?.nodes?.Foo).toEqual({ x: 100, y: 120, w: 200, h: 80 });
    });

    it('18) group layout: group ID {x= y= w= h=}', () => {
      const ir = parseRelat('G { A B }\nlayout { group G {x=50 y=30 w=400 h=180} }');
      expect(ir.layout?.groups?.G).toEqual({ x: 50, y: 30, w: 400, h: 180 });
    });

    it('19) edge bends: edge ID bends {{x=,y=},{x=,y=}}', () => {
      const ir = parseRelat('A-->B\nlayout { edge e_A_B bends {{x=150,y=100},{x=200,y=150}} }');
      expect(ir.layout?.edges?.e_A_B?.bends).toEqual([{ x: 150, y: 100 }, { x: 200, y: 150 }]);
    });

    it('19b) edge layout with anchors: edge ID { src_side, src_t, dst_side, dst_t } bends {{...}}', () => {
      const ir = parseRelat('A-->B\nlayout { edge e_A_B { src_side=top, src_t=0.5, dst_side=bottom, dst_t=0.5 } bends {{x=100,y=100}} }');
      expect(ir.layout?.edges?.e_A_B?.src_side).toBe('top');
      expect(ir.layout?.edges?.e_A_B?.src_t).toBe(0.5);
      expect(ir.layout?.edges?.e_A_B?.dst_side).toBe('bottom');
      expect(ir.layout?.edges?.e_A_B?.dst_t).toBe(0.5);
      expect(ir.layout?.edges?.e_A_B?.bends).toEqual([{ x: 100, y: 100 }]);
    });

    it('20) full layout example (spec section 8)', () => {
      const text = `HongKong { Foo, Bar }
Foo-->Bar
Woo-->Foo[color=red]

layout {
  node Foo {x=100 y=120}
  node Bar {x=280 y=120}
  node Woo {x=190 y=220}
  group HongKong {x=60 y=80 w=320 h=180}
  edge e0 bends {{x=190,y=120},{x=190,y=180}}
}`;
      const ir = parseRelat(text);
      expect(ir.layout?.nodes?.Foo).toEqual({ x: 100, y: 120 });
      expect(ir.layout?.nodes?.Bar).toEqual({ x: 280, y: 120 });
      expect(ir.layout?.nodes?.Woo).toEqual({ x: 190, y: 220 });
      expect(ir.layout?.groups?.HongKong).toEqual({ x: 60, y: 80, w: 320, h: 180 });
      expect(ir.layout?.edges?.e0?.bends).toEqual([{ x: 190, y: 120 }, { x: 190, y: 180 }]);
    });
  });

  describe('style block', () => {
    it('21) style block: node ID [style]', () => {
      const ir = parseRelat('Foo\nstyle { node Foo [color=red] }');
      expect(ir.style?.nodes?.Foo).toEqual({ color: 'red' });
    });

    it('22) style block: group ID [style]', () => {
      const ir = parseRelat('G { A B }\nstyle { group G [color=#00aaff] }');
      expect(ir.style?.groups?.G).toEqual({ color: '#00aaff' });
    });

    it('23) style block: edge ID [style]', () => {
      const ir = parseRelat('A-->B\nstyle { edge e0 [color=gray, width=2] }');
      expect(ir.style?.edges?.e0).toEqual({ color: 'gray', width: 2 });
    });

    it('24) style block: rel relID [style]', () => {
      const ir = parseRelat('A-->B : flight\nstyle { rel flight [color=#00a, label="Flight"] }');
      expect(ir.style?.rels?.flight).toEqual({ color: '#00a', label: 'Flight' });
    });

    it('24b) layout edge with anchors and bends: does not hang (bends inner loop advances)', () => {
      const text = `A-->B
layout {
  edge e_A_B { src_side=top, src_t=0.5, dst_side=right, dst_t=0.5 } bends {{x=100,y=100},{x=200,y=200}}
}`;
      const ir = parseRelat(text);
      expect(ir.layout?.edges?.e_A_B?.bends).toEqual([{ x: 100, y: 100 }, { x: 200, y: 200 }]);
      expect(ir.layout?.edges?.e_A_B?.src_side).toBe('top');
    });

    it('25) style block: full example', () => {
      const text = `Tokyo, NewYork
Tokyo-->NewYork : flight
style {
  node Tokyo [color=#fcc]
  node NewYork [color=#cfc]
  rel flight [color=#00a, label="Flight"]
}`;
      const ir = parseRelat(text);
      expect(ir.style?.nodes?.Tokyo).toEqual({ color: '#fcc' });
      expect(ir.style?.nodes?.NewYork).toEqual({ color: '#cfc' });
      expect(ir.style?.rels?.flight).toEqual({ color: '#00a', label: 'Flight' });
    });
  });
});
