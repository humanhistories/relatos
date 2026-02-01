# relat Style Block Specification (Draft v0)

## 1. Overview

The relat style block lets you describe style for nodes, groups, edges, and relationship types (relID) in one place; it is applied on import. This spec extends the style section (§7) of the main relat spec and defines the syntax for the `style { }` block.

## 2. style Block Syntax

```
style {
  <lines>
}
```

Separators: newline, comma, or semicolon (same as general relat rules). Each line is one of the forms below.

## 3. Node Style

```
node <NodeID> [<style>]
```

- NodeID: Must be already defined.
- style: Node style from main spec §7.3 (color, border, width, height, etc.).

Examples:

```
node Foo [color=red]
node Bar [color=#333, width=120, height=60]
```

## 4. Group Style

```
group <GroupID> [<style>]
```

- GroupID: Must be already defined.
- style: Group style from §7.3 (color, border, width, dash, etc.).

Examples:

```
group HongKong [color=#00aaff, border=#0066cc]
```

## 5. Edge Style

```
edge <EdgeID> [<style>]
```

- EdgeID: Edge ID (e.g. e_&lt;src&gt;_&lt;dst&gt; at export, or the corresponding ID on import).
- style: Edge style from §7.3 (color, width, dash, label, etc.).

Examples:

```
edge e0 [color=gray, width=2]
edge e1 [color=#f00, label="Flight"]
```

## 6. Relationship Type (relID) Style

```
rel <RelID> [<style>]
```

- RelID: Relationship type ID (the identifier used in edge `: relID`).
- style: Edge style from §7.3. Applied to all edges with this relID.

Examples:

```
rel flight [color=#00a, label="Flight"]
rel link [color=#666]
```

## 7. Export Rules

- When exportRelat is called with includeStyle: true, the style block is output from the current node/group/edge styles.
- Nodes: Output "node &lt;id&gt; [key=value,...]" only when the node has at least one style key.
- Groups: Same for "group &lt;id&gt; [key=value,...]".
- Edges: Same for "edge &lt;id&gt; [key=value,...]".
- rel: When edges of the same relID share style, "rel &lt;relID&gt; [key=value,...]" may be output (optional in v0).

## 8. Import Rules

- parseRelat reads the style block and stores it in the IR style structure.
- irToRelatosData merges IR style into nodes, groups, and edges. rel style is merged into edges with that relId.
- Inline style (in declaration `[ ]`) and style block may be merged; style block may override (implementation-defined).

## 9. Example

```
Tokyo, NewYork, London
Tokyo-->NewYork : flight
NewYork-->London : flight
London-->Tokyo : link

style {
  node Tokyo [color=#fcc]
  node NewYork [color=#cfc]
  rel flight [color=#00a, label="Flight"]
  rel link [color=#666]
}
```

## 10. Notes

- The style block is optional. If omitted, only inline `[ ]` style is applied.
- Invalid lines (e.g. undefined ID) should produce warnings; apply what is valid.
- layout and style blocks are both optional; order may be layout then style or style then layout.
