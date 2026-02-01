/**
 * relat import/export tests (layout bracket format)
 */
import { describe, it, expect } from 'vitest';
import { importRelat, exportRelat } from './relat';

describe('importRelat / exportRelat (layout bracket format)', () => {
  it('round-trip: layout with node/group/edge bends uses bracket format', () => {
    const text = `HongKong { Foo, Bar }
Foo-->Bar
Woo-->Foo

layout {
  node Foo {x=100 y=120}
  node Bar {x=280 y=120}
  node Woo {x=190 y=220}
  group HongKong {x=60 y=80 w=320 h=180}
  edge e_Foo_Bar bends {{x=190,y=120},{x=190,y=180}}
}`;
    const data = importRelat(text);
    expect(data.nodes.find(n => n.id === 'Foo')?.position).toEqual({ x: 100, y: 120 });
    expect(data.nodes.find(n => n.id === 'Bar')?.position).toEqual({ x: 280, y: 120 });
    expect(data.groups.find(g => g.id === 'HongKong')?.layout).toEqual({
      position: { x: 60, y: 80 },
      size: { width: 320, height: 180 },
    });
    expect(data.edges[0]?.id).toBe('e_Foo_Bar');
    expect(data.edges[0]?.bends).toEqual([{ x: 190, y: 120 }, { x: 190, y: 180 }]);

    const exported = exportRelat(data.nodes, data.edges, data.groups, { includeLayout: true });
    expect(exported).toContain('node Foo {x=100 y=120}');
    expect(exported).toContain('group HongKong {x=60 y=80 w=320 h=180}');
    expect(exported).toContain('edge e_Foo_Bar bends {{x=190,y=120},{x=190,y=180}}');
  });
});

describe('importRelat (layoutPayload option)', () => {
  it('applies layout from layoutPayload when provided', () => {
    const relatText = 'Foo\nBar\nFoo-->Bar';
    const dataWithoutPayload = importRelat(relatText);
    expect(dataWithoutPayload.nodes.find(n => n.id === 'Foo')?.position).toBeUndefined();

    const layoutPayload = {
      nodes: [
        { id: 'Foo', label: 'Foo', position: { x: 10, y: 20 } },
        { id: 'Bar', label: 'Bar', position: { x: 100, y: 120 } },
      ],
      edges: [
        {
          id: 'e_Foo_Bar',
          src: 'Foo',
          dst: 'Bar',
          relType: 'link',
          bends: [{ x: 50, y: 70 }],
        },
      ],
      groups: [],
    };
    const dataWithPayload = importRelat(relatText, { layoutPayload });
    expect(dataWithPayload.nodes.find(n => n.id === 'Foo')?.position).toEqual({ x: 10, y: 20 });
    expect(dataWithPayload.nodes.find(n => n.id === 'Bar')?.position).toEqual({ x: 100, y: 120 });
    expect(dataWithPayload.edges[0]?.bends).toEqual([{ x: 50, y: 70 }]);
  });

  it('layoutPayload overrides layout block in relat text', () => {
    const relatText = `A B
A-->B
layout { node A {x=0 y=0} node B {x=50 y=50} }`;
    const layoutPayload = {
      nodes: [
        { id: 'A', label: 'A', position: { x: 100, y: 200 } },
        { id: 'B', label: 'B', position: { x: 300, y: 400 } },
      ],
      edges: [{ id: 'e_A_B', src: 'A', dst: 'B', relType: 'link' }],
    };
    const data = importRelat(relatText, { layoutPayload });
    expect(data.nodes.find(n => n.id === 'A')?.position).toEqual({ x: 100, y: 200 });
    expect(data.nodes.find(n => n.id === 'B')?.position).toEqual({ x: 300, y: 400 });
  });
});

describe('importRelat / exportRelat (edge relID)', () => {
  it('export: edge uses : relID (not : "string")', () => {
    const data = importRelat('Tokyo-->NewYork : flight\nNewYork-->London : flight');
    expect(data.edges[0]?.relType).toBe('flight');
    const exported = exportRelat(data.nodes, data.edges, data.groups);
    expect(exported).toContain('Tokyo-->NewYork : flight');
    expect(exported).not.toContain(' : "flight"');
  });

  it('relID only: display label defaults to relID', () => {
    const data = importRelat('NewYork-->London : flight');
    expect(data.edges[0]?.relType).toBe('flight');
    expect(data.edges[0]?.style?.label).toBe('flight');
  });

  it('export: relID with display label — single edge: as "label" on line, no [label=...] on line', () => {
    const data = importRelat('Tokyo-->NewYork : f as "flight"');
    expect(data.edges[0]?.relType).toBe('f');
    expect(data.edges[0]?.style?.label).toBe('flight');
    const exported = exportRelat(data.nodes, data.edges, data.groups);
    expect(exported).toContain('Tokyo-->NewYork : f as "flight"');
    expect(exported).not.toMatch(/rel f \[label="flight"\]/);
    expect(exported).not.toMatch(/Tokyo-->NewYork : f as "flight" \[label=/);
  });

  it('import: [label=...] in style is display label; : relID wins for relType', () => {
    const data = importRelat('A-->B : flight [color=gray, label="Flight"]');
    expect(data.edges[0]?.relType).toBe('flight');
    expect(data.edges[0]?.style?.label).toBe('Flight');
    expect(data.edges[0]?.style?.color).toBe('gray');
  });

  it('backward compat: : "string" gives relId and label', () => {
    const data = importRelat('A-->B : "causes"');
    expect(data.edges[0]?.relType).toBe('causes');
    expect(data.edges[0]?.style?.label).toBe('causes');
  });
});

describe('importRelat (node/group label: ID as "label")', () => {
  it('group label: Earth as "The Earth" { Japan { Tokyo } }', () => {
    const data = importRelat('Earth as "The Earth" { Japan { Tokyo } }');
    const earth = data.groups.find(g => g.id === 'Earth');
    const japan = data.groups.find(g => g.id === 'Japan');
    expect(earth?.label).toBe('The Earth');
    expect(japan?.parentId).toBe('Earth');
    expect(japan?.nodeIds).toEqual(['Tokyo']);
  });

  it('node label in group: Japan { Tokyo as "Tokyo-city", Osaka }', () => {
    const data = importRelat('Japan { Tokyo as "Tokyo-city", Osaka }');
    const tokyo = data.nodes.find(n => n.id === 'Tokyo');
    const osaka = data.nodes.find(n => n.id === 'Osaka');
    expect(tokyo?.label).toBe('Tokyo-city');
    expect(osaka?.label).toBe('Osaka');
  });

  it('nested id as "label": inner group gets label (group-usa as "USA" { group-california as "California" { ... } })', () => {
    const data = importRelat('group-usa as "USA" { group-california as "California" { group-sanfrancisco { ip-1 } } }');
    const usa = data.groups.find(g => g.id === 'group-usa');
    const california = data.groups.find(g => g.id === 'group-california');
    expect(usa?.label).toBe('USA');
    expect(california?.label).toBe('California');
    expect(california?.parentId).toBe('group-usa');
  });

  it('bare reference does not overwrite explicit label (id as "label" first, then id in edge)', () => {
    const data = importRelat('ip-192-0-2-1 as "192.0.2.1"\nip-192-0-2-1-->A');
    const node = data.nodes.find(n => n.id === 'ip-192-0-2-1');
    expect(node?.label).toBe('192.0.2.1');
  });

  it('user export data: full layout with nodes/groups/edge bends imports without hanging', () => {
    const text = `Earth as "The Earth" { Japan { Tokyo, Osaka }, Australia { Sydney, Melbourne }, US { NewYork }, UK { London } }
syster { Osaka, Melbourne }
Tokyo-->NewYork : flight
NewYork-->London : flight
London-->Tokyo : flight

layout {
  node Tokyo {x=-219.62725848082619 y=189.37112831858397}
  node Osaka {x=392.0355365044238 y=217.39332134955743}
  node Sydney {x=985.843173856932 y=171.66261061946892}
  node Melbourne {x=878.9711928466072 y=253.7780005530976}
  node NewYork {x=176.7820796460175 y=467.1181554203539}
  node London {x=415.4487463126841 y=467.1181554203539}
  group Japan {x=-309.6272584808262 y=104.37112831858397 w=791.66279498525 h=173.02219303097345}
  group Australia {x=788.9711928466072 y=86.66261061946892 w=286.8719810103248 h=227.1153899336287}
  group US {x=86.78207964601751 y=382.1181554203539 w=180 h=145}
  group UK {x=325.4487463126841 y=382.1181554203539 w=180 h=145}
  group Earth {x=-359.6272584808262 y=11.662610619468921 w=1485.4704323377582 h=565.455544800885}
  group syster {x=302.0355365044238 y=132.39332134955743 w=666.9356563421834 h=181.38467920354014}
  edge e_London_Tokyo { src_side=top, src_t=0.34187477873491046, dst_side=right, dst_t=0.5 } bends {{x=234.11803376483022,y=254.56922389947113},{x=80.41718894651694,y=218.0579089308673}}
}`;
    const data = importRelat(text);
    expect(data.nodes.length).toBe(6);
    expect(data.groups.length).toBe(6);
    expect(data.edges.length).toBe(3);
    expect(data.groups.find(g => g.id === 'syster')?.layout).toBeDefined();
  });

  it('node lat, lon, info: Tokyo[lat=35.68, lon=139.69, info.country=Japan]', () => {
    const data = importRelat('Tokyo[lat=35.68, lon=139.69, info.country=Japan]');
    const tokyo = data.nodes.find(n => n.id === 'Tokyo');
    expect(tokyo?.coordinates).toEqual([35.68, 139.69]);
    expect(tokyo?.info).toEqual({ country: 'Japan' });
  });

  it('backward compat: node latitude, longitude still import to coordinates', () => {
    const data = importRelat('Tokyo[latitude=35.68, longitude=139.69, info.country=Japan]');
    const tokyo = data.nodes.find(n => n.id === 'Tokyo');
    expect(tokyo?.coordinates).toEqual([35.68, 139.69]);
    expect(tokyo?.info).toEqual({ country: 'Japan' });
  });

  it('export: node with coordinates outputs lat=, lon= (not latitude/longitude)', () => {
    const data = importRelat('Tokyo[lat=35.68, lon=139.69, info.country=Japan]');
    const exported = exportRelat(data.nodes, data.edges, data.groups);
    expect(exported).toMatch(/lat=35\.68/);
    expect(exported).toMatch(/lon=139\.69/);
    expect(exported).not.toContain('latitude=');
    expect(exported).not.toContain('longitude=');
  });

  it('edge weight and info: A-->B : flight [weight=2, info.distance=1000]', () => {
    const data = importRelat('A-->B : flight [weight=2, info.distance=1000]');
    const edge = data.edges[0];
    expect(edge?.relType).toBe('flight');
    expect(edge?.style?.weight).toBe(2);
    expect(edge?.info).toEqual({ distance: 1000 });
  });

  it('group info: G[info.region=Asia] { A B }', () => {
    const data = importRelat('G[info.region=Asia] { A B }');
    const g = data.groups.find(gr => gr.id === 'G');
    expect(g?.info).toEqual({ region: 'Asia' });
  });

  it('multiple group membership: syster { Osaka, Melbourne } with Earth hierarchy', () => {
    const text = `Earth as "The Earth" { Japan { Tokyo as "Tokyo-city", Osaka }, Australia { Sydney, Melbourne } }
syster { Osaka, Melbourne }`;
    const data = importRelat(text);
    const earth = data.groups.find(g => g.id === 'Earth');
    const japan = data.groups.find(g => g.id === 'Japan');
    const australia = data.groups.find(g => g.id === 'Australia');
    const syster = data.groups.find(g => g.id === 'syster');
    expect(earth?.label).toBe('The Earth');
    expect(japan?.nodeIds).toEqual(expect.arrayContaining(['Tokyo', 'Osaka']));
    expect(australia?.nodeIds).toEqual(expect.arrayContaining(['Sydney', 'Melbourne']));
    expect(syster?.nodeIds).toEqual(['Osaka', 'Melbourne']);
    expect(data.nodes.find(n => n.id === 'Tokyo')?.label).toBe('Tokyo-city');
  });
});

describe('importRelat / exportRelat (style block)', () => {
  it('style block applies to nodes, groups, edges, relID', () => {
    const text = `Foo, Bar
G { Foo Bar }
Foo-->Bar : flight
Bar-->Foo : link

style {
  node Foo [color=red]
  group G [color=#eee]
  edge e_Foo_Bar [color=#00a]
  rel flight [label="Flight"]
}`;
    const data = importRelat(text);
    expect(data.nodes.find(n => n.id === 'Foo')?.style?.color).toBe('red');
    expect(data.groups.find(g => g.id === 'G')?.style?.color).toBe('#eee');
    expect(data.edges.find(e => e.id === 'e_Foo_Bar')?.style?.color).toBe('#00a');
    expect(data.edges[0]?.style?.label).toBe('Flight');
  });

  it('export with includeStyle outputs style block', () => {
    const data = importRelat('Foo[color=red]\nA-->B : flight\nstyle { rel flight [label="Flight"] }');
    const exported = exportRelat(data.nodes, data.edges, data.groups, { includeStyle: true });
    expect(exported).toContain('style {');
    expect(exported).toMatch(/node Foo \[color=red\]/);
    expect(exported).toContain('A-->B : flight as "Flight"');
    expect(exported).not.toMatch(/rel flight \[label="Flight"\]/);
  });
});

describe('importRelat / exportRelat (nested groups)', () => {
  it('import: World { Japan { Tokyo } } sets parentId', () => {
    const data = importRelat('World { Japan { Tokyo } }');
    const world = data.groups.find(g => g.id === 'World');
    const japan = data.groups.find(g => g.id === 'Japan');
    expect(world?.nodeIds).toEqual([]);
    expect(world?.parentId).toBeUndefined();
    expect(japan?.nodeIds).toEqual(['Tokyo']);
    expect(japan?.parentId).toBe('World');
  });

  it('round-trip: nested group export then import', () => {
    const text = 'World { Japan { Tokyo }, Europe { London } }';
    const data = importRelat(text);
    const exported = exportRelat(data.nodes, data.edges, data.groups);
    expect(exported).toContain('World { Japan { Tokyo }, Europe { London } }');
    const data2 = importRelat(exported);
    expect(data2.groups.find(g => g.id === 'Japan')?.parentId).toBe('World');
    expect(data2.groups.find(g => g.id === 'Europe')?.parentId).toBe('World');
  });
});

describe('importRelat / exportRelat (export spec: layout w/h, rel label in style)', () => {
  it('node width/height in layout block, not in main body', () => {
    const data = importRelat('layout { node Foo {x=100 y=120 w=200 h=80} }\nFoo');
    expect(data.nodes[0]?.style?.width).toBe(200);
    expect(data.nodes[0]?.style?.height).toBe(80);
    const exported = exportRelat(data.nodes, data.edges, data.groups, { includeLayout: true });
    expect(exported).toContain('node Foo {x=100 y=120 w=200 h=80}');
    expect(exported).not.toMatch(/Foo\[.*width=/);
  });

  it('with includeStyle: edge line has no label; label in style block', () => {
    const data = importRelat('A-->B : flight\nB-->C : flight');
    data.edges[0]!.style = { ...data.edges[0]!.style, label: 'Direct Flight' };
    data.edges[1]!.style = { ...data.edges[1]!.style, label: 'Direct Flight' };
    const exported = exportRelat(data.nodes, data.edges, data.groups, { includeStyle: true });
    expect(exported).toContain('A-->B : flight');
    expect(exported).not.toMatch(/A-->B : flight\[.*label/);
    expect(exported).toMatch(/rel flight \[label="Direct Flight"\]/);
  });

  it('relID and label same: omit rel from style block', () => {
    const data = importRelat('A-->B : flight\nB-->C : flight');
    const exported = exportRelat(data.nodes, data.edges, data.groups, { includeStyle: true });
    expect(exported).not.toMatch(/rel flight \[label="flight"\]/);
  });

  it('relID and label same: edge line has no [label="relID"]', () => {
    const text = `Tokyo, NewYork, London
Tokyo-->NewYork : flight
NewYork-->London : flight
London-->Tokyo : flight`;
    const data = importRelat(text);
    const exported = exportRelat(data.nodes, data.edges, data.groups, { includeLayout: true });
    expect(exported).toContain('Tokyo-->NewYork : flight');
    expect(exported).toContain('NewYork-->London : flight');
    expect(exported).toContain('London-->Tokyo : flight');
    expect(exported).not.toMatch(/\[label="flight"\]/);
    expect(exported).not.toMatch(/rel flight \[label="flight"\]/);
  });

  it('per-edge labels: export uses as "label" only, no [label=...] on edge line', () => {
    const text = `Tokyo-->NewYork : flight as "flight A"
NewYork-->London : flight as "flight B"
London-->Tokyo : flight as "flight C"

layout {
  node Tokyo {x=199 y=252.75}
  node NewYork {x=557 y=252.75}
  node London {x=199 y=718.25}
}`;
    const data = importRelat(text);
    const exported = exportRelat(data.nodes, data.edges, data.groups, { includeLayout: true });
    expect(exported).toContain('Tokyo-->NewYork : flight as "flight A"');
    expect(exported).toContain('NewYork-->London : flight as "flight B"');
    expect(exported).toContain('London-->Tokyo : flight as "flight C"');
    expect(exported).not.toMatch(/\[label="flight [ABC]"\]/);
  });

  it('uniform rel label: import style { rel flight [label="Direct Flight"] } then export edges without as, label in style', () => {
    const text = `Tokyo-->NewYork : flight
NewYork-->London : flight
London-->Tokyo : flight

style {
  rel flight [label="Direct Flight"]
}

layout {
  node Tokyo {x=199 y=252.75}
  node NewYork {x=557 y=252.75}
  node London {x=199 y=718.25}
}`;
    const data = importRelat(text);
    expect(data.edges.every((e) => e.style?.label === 'Direct Flight')).toBe(true);
    const exported = exportRelat(data.nodes, data.edges, data.groups, { includeLayout: true });
    expect(exported).toContain('Tokyo-->NewYork : flight');
    expect(exported).toContain('NewYork-->London : flight');
    expect(exported).toContain('London-->Tokyo : flight');
    expect(exported).not.toMatch(/as "Direct Flight"/);
    expect(exported).toMatch(/rel flight \[label="Direct Flight"\]/);
  });

  it('omit optional node lines: nodes with only width/height in layout are not output in main body', () => {
    const data = importRelat('layout { node Foo {x=100 y=120 w=200 h=80} }\nFoo\nBar\nFoo-->Bar');
    const exported = exportRelat(data.nodes, data.edges, data.groups, { includeLayout: true });
    expect(exported).toContain('node Foo {x=100 y=120 w=200 h=80}');
    expect(exported).not.toMatch(/^\s*Foo\s*$/m);
    expect(exported).not.toMatch(/^\s*Bar\s*$/m);
    expect(exported).toContain('Foo-->Bar');
  });

  it('edge anchors round-trip: src_side, src_t, dst_side, dst_t in layout', () => {
    const text = `A-->B
layout {
  node A {x=50 y=100}
  node B {x=250 y=100}
  edge e_A_B { src_side=top, src_t=0.5, dst_side=bottom, dst_t=0.5 } bends {{x=150,y=80}}
}`;
    const data = importRelat(text);
    const edge = data.edges.find(e => e.id === 'e_A_B');
    expect(edge?.srcAnchor).toEqual({ side: 'top', t: 0.5 });
    expect(edge?.dstAnchor).toEqual({ side: 'bottom', t: 0.5 });
    expect(edge?.bends).toEqual([{ x: 150, y: 80 }]);
    const exported = exportRelat(data.nodes, data.edges, data.groups, { includeLayout: true });
    expect(exported).toMatch(/edge e_A_B \{ src_side=top, src_t=0\.5, dst_side=bottom, dst_t=0\.5 \} bends \{\{x=150,y=80\}\}/);
    const data2 = importRelat(exported);
    expect(data2.edges.find(e => e.id === 'e_A_B')?.srcAnchor).toEqual({ side: 'top', t: 0.5 });
    expect(data2.edges.find(e => e.id === 'e_A_B')?.dstAnchor).toEqual({ side: 'bottom', t: 0.5 });
  });
});
