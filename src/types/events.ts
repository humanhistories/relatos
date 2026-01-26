/**
 * Relatos Viewer - Event Type Definitions
 */

import type { Node, Edge, Group } from './data';
import type { ViewType } from './options';

/**
 * Node click event
 */
export interface NodeClickEvent {
  /**
   * Clicked node
   */
  node: Node;
  /**
   * Click position (view coordinate system)
   */
  position: {
    x: number;
    y: number;
  };
  /**
   * Original DOM event
   */
  originalEvent: MouseEvent | TouchEvent;
  /**
   * View that triggered the event
   */
  view?: ViewType;
}

/**
 * Edge click event (optional)
 */
export interface EdgeClickEvent {
  /**
   * Clicked edge
   */
  edge: Edge;
  /**
   * Click position (view coordinate system)
   */
  position: {
    x: number;
    y: number;
  };
  /**
   * Original DOM event
   */
  originalEvent: MouseEvent | TouchEvent;
  /**
   * View that triggered the event
   */
  view?: ViewType;
}

/**
 * Group click event
 */
export interface GroupClickEvent {
  /**
   * Clicked group
   */
  group: Group;
  /**
   * Click position (view coordinate system)
   */
  position: {
    x: number;
    y: number;
  };
  /**
   * Original DOM event
   */
  originalEvent: MouseEvent | TouchEvent;
  /**
   * View that triggered the event
   */
  view?: ViewType;
}

/**
 * View change event
 */
export interface ViewChangeEvent {
  /**
   * Previous view type
   */
  previousView: string;
  /**
   * New view type
   */
  newView: string;
}

/**
 * Save payload
 * Edited data passed to onSave callback
 */
export interface SavePayload {
  /**
   * Edited node list
   * Includes edit information such as position, anchors, bends
   */
  nodes: Node[];
  /**
   * Edited edge list
   * Includes edit information such as anchors, bends
   */
  edges: Edge[];
  /**
   * Edited group list (layout information only)
   * Only layout information (position and size) is editable
   * Group membership (nodeIds) and hierarchy (parentId) cannot be changed
   */
  groups?: Group[];
}

/**
 * RelatosViewer event handlers
 */
export interface RelatosEvents {
  /**
   * Callback on node click
   * Fired in graph (view mode), map2d, globe3d
   */
  onNodeClick?: (event: NodeClickEvent) => void;

  /**
   * Callback on edge click (optional)
   */
  onEdgeClick?: (event: EdgeClickEvent) => void;

  /**
   * Callback on group click
   */
  onGroupClick?: (event: GroupClickEvent) => void;

  /**
   * Callback for saving changes in edit mode
   * Notifies changes in graph edit mode with debounce
   * Returns all nodes/edges including anchors, bends
   */
  onSave?: (payload: SavePayload) => void;

  /**
   * Callback on view change
   */
  onViewChange?: (event: ViewChangeEvent) => void;

  /**
   * Callback on error
   */
  onError?: (error: Error) => void;
}
