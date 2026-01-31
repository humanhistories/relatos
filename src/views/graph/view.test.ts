/**
 * Graph view tests: group layout sync when moving a group (e.g. Earth move updates syster bounds)
 */
// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { GraphView } from './view';
import type { Node, Edge } from '../../types';
import type { Group } from '../../types/data';

describe('GraphView updateGroupLayouts (Earth move → syster bounds sync)', () => {
  it('when Earth is moved, groups containing descendant nodes (e.g. syster) get bounds recalculated', () => {
    const container = document.createElement('div');
    container.style.width = '800px';
    container.style.height = '600px';
    const view = new GraphView(container, undefined, undefined, false, undefined, undefined);

    // Earth contains Japan (Tokyo, Osaka) and Australia (Sydney, Melbourne). syster contains Osaka, Melbourne.
    const nodes: Node[] = [
      { id: 'Tokyo', label: 'Tokyo', position: { x: 100, y: 100 } },
      { id: 'Osaka', label: 'Osaka', position: { x: 200, y: 100 } },
      { id: 'Sydney', label: 'Sydney', position: { x: 100, y: 200 } },
      { id: 'Melbourne', label: 'Melbourne', position: { x: 200, y: 200 } },
    ];
    const edges: Edge[] = [];
    const groups: Group[] = [
      { id: 'Earth', label: 'Earth', nodeIds: [], parentId: undefined, layout: { position: { x: 50, y: 50 }, size: { width: 200, height: 200 } } },
      { id: 'Japan', label: 'Japan', nodeIds: ['Tokyo', 'Osaka'], parentId: 'Earth', layout: { position: { x: 80, y: 80 }, size: { width: 140, height: 50 } } },
      { id: 'Australia', label: 'Australia', nodeIds: ['Sydney', 'Melbourne'], parentId: 'Earth', layout: { position: { x: 80, y: 170 }, size: { width: 140, height: 50 } } },
      { id: 'syster', label: 'syster', nodeIds: ['Osaka', 'Melbourne'], parentId: undefined, layout: { position: { x: 180, y: 130 }, size: { width: 40, height: 80 } } },
    ];

    view.setData(nodes, edges, groups);

    const systerBefore = groups.find(g => g.id === 'syster');
    expect(systerBefore?.layout).toBeDefined();
    const beforeX = systerBefore!.layout!.position.x;
    const beforeW = systerBefore!.layout!.size.width;

    // Simulate Earth move: shift all descendant nodes and groups by (50, 50)
    const deltaX = 50;
    const deltaY = 50;
    for (const n of nodes) {
      if (n.position) {
        n.position.x += deltaX;
        n.position.y += deltaY;
      }
    }
    const earth = groups.find(g => g.id === 'Earth')!;
    const japan = groups.find(g => g.id === 'Japan')!;
    const australia = groups.find(g => g.id === 'Australia')!;
    if (earth.layout) {
      earth.layout.position.x += deltaX;
      earth.layout.position.y += deltaY;
    }
    if (japan.layout) {
      japan.layout.position.x += deltaX;
      japan.layout.position.y += deltaY;
    }
    if (australia.layout) {
      australia.layout.position.x += deltaX;
      australia.layout.position.y += deltaY;
    }

    // Update group layouts (as in updateGroupPosition after move). This must recalculate syster's bounds.
    (view as unknown as { updateGroupLayouts: (nodeId?: string, groupId?: string, preserve?: boolean) => void })
      .updateGroupLayouts(undefined, 'Earth', true);

    const systerAfter = groups.find(g => g.id === 'syster');
    expect(systerAfter?.layout).toBeDefined();
    // syster should have been recalculated to wrap Osaka and Melbourne at their new positions (250,150) and (250,250)
    expect(systerAfter!.layout!.position.x).not.toBe(beforeX);
    expect(systerAfter!.layout!.size.width).not.toBe(beforeW);
    // Bounds should contain the moved nodes (center 250,150 and 250,250)
    const sx = systerAfter!.layout!.position.x;
    const sy = systerAfter!.layout!.position.y;
    const sw = systerAfter!.layout!.size.width;
    const sh = systerAfter!.layout!.size.height;
    expect(sx).toBeLessThanOrEqual(250);
    expect(sy).toBeLessThanOrEqual(150);
    expect(sx + sw).toBeGreaterThanOrEqual(250);
    expect(sy + sh).toBeGreaterThanOrEqual(250);
  });
});
