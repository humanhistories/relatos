# relat Text Format — Export Specification (Draft v0)

## 1. Overview

This spec defines the rules for exportRelat when outputting relat text. The goal is to stay consistent with import while avoiding redundancy and keeping a uniform format.

## 2. Node Width/Height (w, h) in layout Block

Node width and height are layout information, not style. On export:

- Do **not** add `[width=...]` or `[height=...]` to node lines in the main body.
- Output them in the layout block as `w=`, `h=` in the node line.

Format:

```
layout {
  node <NodeID> {x=<number> y=<number> [w=<number>] [h=<number>]}
  ...
}
```

- Main-body node lines must not include width/height in `[ ]`.
- When includeLayout: true, if a node has position and style.width / style.height, output w= and h= in the layout node line.

Avoid:

```
NewYork[width=243.49280973451368]
```

Correct:

- Main body: `NewYork` only, or `NewYork[color=...]` (no width/height in brackets).
- layout block: `node NewYork {x=618.7464048672568 y=123 w=243.49280973451368}`

## 3. Edge Display Label: Use as "label" Only; No [label="..."] on Edge Line

When the display label differs from relID, use only `as "display label"` on the edge line. Do **not** put `[label="display label"]` in the bracket to avoid redundancy.

- Individual labels: use `as "label"` only.
- Do not add `[label="label"]` on the edge line when `as "..."` is already present.

Avoid:

```
Tokyo-->NewYork : flight as "flight A" [label="flight A"]
```

Correct:

```
Tokyo-->NewYork : flight as "flight A"
NewYork-->London : flight as "flight B"
London-->Tokyo : flight as "flight C"
```

## 4. Uniform relType Label: Put in style Block

When multiple edges share the same relType and the same display label, do **not** write `as "label"` on each edge line. Instead, output a single `rel <relID> [label="..."]` in the style block.

Format:

- Main body: `<src>--><dst> : <relID>` (no `as "display label"`).
- style block (output whenever there is a uniform rel, regardless of includeStyle): `rel <relID> [label="display label"]`.

- If all edges of a relType have the same label, edge lines show only relID; the label is in the style block.
- Even when includeStyle is false, output the style block with rel lines when there are uniform rel labels.

Correct example:

Main body:

```
Tokyo-->NewYork : flight
NewYork-->London : flight
London-->Tokyo : flight
```

style block:

```
style {
  rel flight [label="Direct Flight"]
}
```

## 5. relID Same as Display Label: Omit Label

When the display label equals the relID string, do not add `as "label"` or `[label="..."]` on the edge line, and do not output a rel line in the style block.

- Edge line: e.g. `London-->Tokyo : flight` (no `[label="flight"]`).
- When only relID is given, the display label is treated as relID, so the edge line is `<src>--><dst> : <relID>` only.
- style block: do not output `rel flight [label="flight"]` when relID and label are the same.

Avoid:

```
London-->Tokyo : flight [label="flight"]
```

Correct:

```
London-->Tokyo : flight
```

## 6. Omit Optional Node Lines

When a node has label equal to ID, no main-body style (color, border, etc.), and only width/height in layout, do **not** output a standalone node line (e.g. NewYork, London).

- Output a main-body node line only when: label differs from ID, or there is style other than width/height. Width/height alone are expressed in the layout block, so no main-body node line is needed.
- Nodes referenced only in groups or edges are implicitly created on import, so export may omit redundant “ID-only” lines.

Avoid:

```
Earth { ... America { US { NewYork } } ... }
NewYork
London
Tokyo-->NewYork : flight
```

Correct:

```
Earth { ... America { US { NewYork } } ... }
Tokyo-->NewYork : flight
```

(No standalone NewYork, London lines.)

## 7. Summary (Export Priority)

- **Nodes**: width/height → only in layout node line as w=, h=. Do not put them in main-body `[ ]`. Omit optional node lines (ID-only, no style).
- **Edges**: Individual labels → `as "label"` only; do not add `[label="..."]` on the edge line. When all edges of a relType have the same label, omit `as` on edge lines and put `style { rel <relID> [label="..."] }`.
- **style block**: Do not output rel when relID and label are the same.
