# Relatos Graph Edit Mode Specification (Draft v0)

## 1. Overview

This spec defines the behavior of Relatos Graph view in edit mode: moving and resizing nodes and groups, editing edge anchors and bends, and how layout updates propagate.

## 2. Editable Objects

- **Nodes**: Move position; resize via resize handles.
- **Groups**: Move rectangle; resize rectangle.
- **Edges**: Change anchor positions; add, move, or remove bend points.

## 3. Group Move

### 3.1 Behavior

When the user drags a group rectangle:

- All nodes that are **direct members** of that group (not in a child group) move by the same delta.
- All **child groups** (parentId equals this group) and their descendants move by the same delta.
- The group’s own layout (position) is updated to the new coordinates.

### 3.2 Other Groups’ Rectangles

When a group G is moved, recalculate the rectangle (bounds) for:

1. G’s parent group, and that parent’s parent, and so on up the hierarchy.
2. Any other group H that has at least one of “G’s nodes” in its nodeIds, and H’s parent groups up the hierarchy.

“G’s nodes” means: G’s direct nodeIds plus all nodeIds of G’s child groups, grandchild groups, etc.

- Example (moving syster): Osaka and Melbourne move → groups that include them in nodeIds (e.g. Japan, Australia, Earth) have their rectangles recalculated.
- Example (moving Earth): Nodes in descendant groups move → Japan, Australia, and also syster (which shares Osaka, Melbourne) have their rectangles recalculated.

## 4. Group Resize

When the user resizes a group via its resize handles:

- That group’s layout (position, size) is updated.
- Parent groups’ rectangles are recalculated from their children’s layouts (e.g. updateGroupLayouts; only parents are updated; nodes do not move).

## 5. Node Move or Resize

When a node is moved or resized:

- Recalculate the rectangle for every group that has that node in nodeIds.
- Then recalculate the rectangles of those groups’ parents up the hierarchy.

## 6. Edge Edit

When anchors or bends are changed, only the edge’s appearance is updated. Node and group bounds are not changed.

## 7. Save

Layout changes made in edit mode are persisted by saving. The client obtains the updated relat text via exportRelat(includeLayout: true) and should pass that (or equivalent) to the onSave callback.
