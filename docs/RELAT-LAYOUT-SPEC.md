# relat Layout Block Specification (Draft v0)

## 1. Overview

The relat layout block describes Graph view layout (node/group positions and sizes, edge anchors and bends) in text so it can be restored on import. Layout is separate from relationship data and style.

This spec details the “11. Layout (reserved)” section of the main relat spec. In relat, comma, semicolon, and newline are equivalent separators; to avoid ambiguity, layout entries with numeric lists must be enclosed in braces `{}`.

## 2. layout Block Syntax

```
layout {
  <lines>
}
```

Separators: newline, comma, or semicolon. Each line is one of the forms below. Values (coordinates, sizes, etc.) must be enclosed in `{ }` for unambiguous parsing.

## 3. Node Position and Size

```
node <NodeID> {x=<number> y=<number> [w=<number>] [h=<number>] [fixed]}
```

- NodeID: Must be already defined.
- x, y: Node center in Graph coordinates (logical pixels).
- w, h: Optional. Node width and height (pixels). Default from style or implementation.
- fixed: Optional. Marks the node as fixed (e.g. not moved by auto-layout). v0 may interpret; not required.

Examples:

```
node Foo {x=100 y=200}
node Bar {x=300 y=200 w=120 h=60 fixed}
```

## 4. Group Layout

```
group <GroupID> {x=<number> y=<number> w=<number> h=<number>}
```

- GroupID: Must be already defined.
- x, y: Top-left of the group rectangle in Graph coordinates.
- w, h: Width and height of the group rectangle.

Example:

```
group HongKong {x=50 y=30 w=400 h=180}
```

## 5. Edge Bends and Anchors

```
edge <EdgeID> [ { src_side=<side> src_t=<number> dst_side=<side> dst_t=<number> } ] bends {{x=<x1>,y=<y1>} [, ...]}
```

- EdgeID: Edge ID (at export: e_&lt;src&gt;_&lt;dst&gt;, or e_&lt;src&gt;_&lt;dst&gt;_2 for duplicate pairs).
- Anchors (optional): Which side and position on the node the edge connects to. Inside `{ }` as key=value; separators: comma, space, or newline.
  - src_side, dst_side: one of top, right, bottom, left.
  - src_t, dst_t: position on that side (0..1). 0 = start, 1 = end.
- bends: List of bend points. Outer `{}` wraps the list; each point is `{x=&lt;number&gt;,y=&lt;number&gt;}`; comma-separated.

Examples:

```
edge e_Foo_Bar bends {{x=150,y=100},{x=200,y=150}}
edge e_NewYork_London { src_side=top, src_t=0.5, dst_side=bottom, dst_t=0.5 } bends {{x=699,y=337},{x=773,y=202}}
```

## 6. Export Rules

- When exportRelat is called with includeLayout: true, the layout block is output from the current Graph view state.
- Nodes: Output "node &lt;id&gt; {x=&lt;x&gt; y=&lt;y&gt;}" only when the node has position. w, h may be included when present in style. fixed may be omitted in v0.
- Groups: Output "group &lt;id&gt; {x=... y=... w=... h=...}" only when the group has layout.
- Edges: Output "edge &lt;id&gt; [ { src_side=..., src_t=..., dst_side=..., dst_t=... } ] bends {{x=...,y=...},...}" when the edge has bends or anchors. Anchors come first when present; bends only if present. Edge ID format: e_&lt;src&gt;_&lt;dst&gt;.

## 7. Import Rules

- parseRelat reads the layout block and stores it in the IR layout structure.
- irToRelatosData applies IR layout to nodes (position), groups (layout), and edges (bends, anchors).
- Nodes/groups/edges not mentioned in layout remain without layout (e.g. auto-layout).
- Layout can also be supplied via `importRelat(relatText, { layoutPayload })` with a SavePayload (e.g. from the onSave callback). When provided, layoutPayload takes precedence over the layout block in the relat text.

## 8. Example with Layout

```
HongKong { Foo, Bar }
Foo-->Bar
Woo-->Foo[color=red]

layout {
  node Foo {x=100 y=120}
  node Bar {x=280 y=120}
  node Woo {x=190 y=220}
  group HongKong {x=60 y=80 w=320 h=180}
  edge e0 bends {{x=190,y=120},{x=190,y=180}}
}
```

## 9. Notes

- The layout block is optional. If omitted, no layout is applied.
- Invalid lines (e.g. undefined ID) should produce warnings; apply what is valid.
- Coordinates are in Graph view logical coordinates (before zoom/pan).

## 10. Multiple Group Membership and Layout

When a node belongs to multiple groups (main spec §6.7), moving one group in edit mode moves its nodes. Other groups that contain those nodes (and their parent groups) have their rectangles recalculated from the new node positions. See **GRAPH-EDIT-SPEC.md**.
