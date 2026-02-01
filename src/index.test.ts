/**
 * Entry point tests: legacy "data" option is rejected
 */
// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { createRelatosViewer } from './index';

describe('createRelatosViewer', () => {
  it('throws when options.data is passed (use initialRelat instead)', () => {
    const container = document.createElement('div');
    container.style.width = '400px';
    container.style.height = '300px';

    expect(() =>
      createRelatosViewer(container, {
        data: { nodes: [], edges: [], groups: [] },
      } as unknown as Parameters<typeof createRelatosViewer>[1])
    ).toThrow(/data.*removed|initialRelat/);
  });
});
