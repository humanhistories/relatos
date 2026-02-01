# relat Text Format Specification (Draft v0)

## 1. Overview

relat is a dedicated text format for Relatos that describes relationship diagrams (nodes, edges, groups, layout) with minimal syntax so that humans can write it intuitively.

Design principles:

- No redundant keywords or mandatory declarations
- Not dependent on line breaks or whitespace
- One-liner and multi-line are equivalent
- Resilient to hand-editing, copy-paste, and URL embedding
- Ambiguities resolved by precedence rules

## 2. Basic Concepts

relat consists of:

- **Node**: A point on the diagram (concept, entity, event, etc.)
- **Edge**: A relationship between nodes
- **Group**: A visual/logical container for nodes
- **Style**: Visual attributes (color, line type, weight, etc.)
- **Layout**: Position information for nodes and groups (grammar reserved here; details in a separate spec)

### 2.5 Separation of Data in Relatos

Relatos separates relationship data, style, and layout. Export/import and list views use:

- **Node**: Main attributes (id, label, lat, lon, info); style (color, border, etc.); layout (x, y, w, h in Graph coordinates)
- **Edge**: Main attributes (id, src, dst, relID, weight, info); style (color); layout (src_side, src_t, dst_side, dst_t, bends)
- **Group**: Main attributes (id, label, nodeIds, info); style (color, border, etc.); layout (x, y, w, h rectangle)

In relat syntax, main attributes are expressed by the node/edge/group declaration itself; style by `[key=value]`; layout by the `layout` block.

## 3. Statement Separators (Critical Rule)

The following are **equivalent statement separators (SEPARATOR)**:

- Comma `,`
- Semicolon `;`
- Newline (`\n`, `\r\n`)

```
Foo,Bar
Foo;Bar
Foo
Bar
```

All of the above have the same meaning.

## 4. Nodes

### 4.1 Minimal Syntax (Implicit Node)

```
Foo
```

Node ID: Foo  
Label: Foo  

The `node` keyword is optional.

### 4.2 Labeled Node

To attach a display label to a node ID, use only:

`<NodeID> as "display label"` — Node ID: ID, Label: display label

(Spec simplification: `"display name" as ID` is not supported.)

Examples:

- `Tokyo as "Tokyo-city"`
- `Foo as "Display Name"`

### 4.3 Node Style

```
Foo[color=red]
node Foo[color=red,width=2]
Foo as "Display"[color=#ff0000]
```

Style is specified in `[...]`. The `node` keyword may be omitted.

### 4.4 Node lat, lon, info

Inside node `[ ]`, in addition to style you may specify:

- `lat=<number>` — Latitude (Map2D/Globe3D). In Relatos: coordinates[0]
- `lon=<number>` — Longitude (Map2D/Globe3D). In Relatos: coordinates[1]
- `info.<key>=<value>` — Arbitrary data stored in node.info. Dotted keys for nesting (e.g. info.region=Asia)

Examples:

- `Tokyo[lat=35.68, lon=139.69]`
- `Tokyo[lat=35.68, lon=139.69, info.country=Japan, info.population=14000000]`
- `Osaka[info.region=Kansai]`

## 5. Edges

### 5.1 Basic Syntax

```
Foo-->Bar
```

`-->` is always parsed as the edge operator with highest precedence. Surrounding spaces are optional; `Foo --> Bar` and `Foo-->Bar` are equivalent.

### 5.2 Relationship ID (relID) and Display Label

```
src-->dest : relID
```

relID is an identifier (no quotes). It denotes the relationship type. If only relID is given, the display label is the same string (e.g. `Tokyo-->NewYork : flight` displays as "flight").

To use a display label different from relID:

```
src-->dest : relID as "display label"
```

Examples:

- `Tokyo-->NewYork : flight`
- `Tokyo-->NewYork : f as "flight"`

### 5.3 Edge Style, weight, info

```
src-->dest : relID [color=#f00, label="Flight"]
```

After relID, `[ ]` may specify style and main attributes:

- color, width, dash, label — Style (see §7.3). width is line thickness (Relatos: style.weight)
- weight=<number> — Edge weight (Relatos: style.weight). width= is synonymous
- info.<key>=<value> — Arbitrary data stored in edge.info

Examples:

- `A-->B : flight [color=#f00]`
- `A-->B : flight [weight=2, info.distance=1000]`
- `Tokyo-->Osaka : flight [color=gray, label="Flight", info.duration=1.5]`

## 6. Groups

### 6.1 Minimal Syntax

```
HongKong {
  Foo
  Bar
}
```

HongKong is both group ID and label. Lines inside the block are member nodes. Undefined nodes are implicitly created.

### 6.2 Labeled Group

To attach a display label to a group ID, use only:

`<GroupID> as "display name" { ... }` — Group ID: GroupID, Label: display name

Examples:

- `HongKong as "Hong Kong" { Foo, Bar }`
- `Earth as "The Earth" { Japan { Tokyo }, ... }`

### 6.3 Group Style and info

```
HongKong[color=#00aaff,border=2] {
  Foo
  Bar
}
```

Inside `[ ]` you may add `info.<key>=<value>`; stored in group.info.

Examples:

- `Asia[info.region=Asia] { Japan, China }`
- `G[color=#00aaff, info.owner=Team1] { A, B }`

### 6.4 Nodes and Style Inside a Group

Inside a group block `{ }`, members may be written as `<NodeID>` or `<NodeID> [style]`, so membership and node style can be expressed together.

```
Japan { Tokyo [color=#ff0000] }
Japan { Tokyo [color=#ff0000], Osaka [color=#00aa00] }
```

Each element in the block must be one of:

- `<NodeID>`
- `<NodeID>[style]`
- `<NodeID> as "label"`
- `<NodeID> as "label"[style]`

NodeID is registered as a member. `as "label"` sets the node’s display label. `[style]` applies style to that node.

Examples:

- `Japan { Tokyo as "Tokyo-city", Osaka }`
- `Japan { Tokyo as "Tokyo-city" [color=#ff0000] }`

### 6.5 Nested Groups (with group keyword)

A block may contain another group. With explicit `group`:

`group <parentID> { group <childID> { <NodeID> ... } ... }`

Examples:

- `group World { group Japan { Tokyo } }`
- `group World { group Japan { Tokyo }, group Europe { London, Paris } }`

### 6.6 Nested Groups (without group keyword)

You may omit `group` and write:

`<parentID> { <childID> { <NodeID> ... } ... }`

Examples:

- `World { Japan { Tokyo } }`
- `World { Japan { Tokyo }, Europe { London, Paris } }`

Block elements: `<NodeID>`, `<NodeID>[style]`, or `<childID> { ... }` for a nested group.

Relatos represents each group with nodeIds (direct members) and parentId (parent group ID; omitted means top-level). Up to 3 levels of nesting are supported.

### 6.7 Multiple Group Membership

A node may belong to multiple groups that are not in a hierarchy. Write the same node ID in multiple group blocks. Each group’s nodeIds includes that node independently of parentId.

Example:

- `Earth as "The Earth" { Japan { Tokyo as "Tokyo-city", Osaka }, Australia { Sydney, Melbourne }, ... }`
- `syster { Osaka, Melbourne }`

Then Osaka belongs to both Japan and syster; Melbourne to both Australia and syster. Japan and Australia are children of Earth (parentId=Earth). syster has no parent (top-level).

## 7. Style (Common)

### 7.1 Syntax

```
[key=value, key=value, flag]
```

A bare flag is equivalent to flag=true. Separators: `,`, `;`, or newline. Key names: alphanumeric plus `-`, `_`.

### 7.2 Value Types

- Color: `#RRGGBB`
- Number: `1`, `2.5`
- Boolean: `true`, `false`
- String: `"..."`, `'...'`

### 7.3 Allowed Keys by Element

Inside `[ ]` the following keys are allowed. In addition to style, nodes may have lat/lon/info.*, edges weight/info.*, groups info.* (see §4.4, §5.3, §6.3).

**Node** [ ]: style (color, border, width, height); data (lat, lon, info.<key>)  
**Edge** [ ]: style (color, width as line weight → style.weight, dash, label); data (weight, info.<key>)  
**Group** [ ]: style (color, border, width, dash); data (info.<key>)

## 8. Disambiguation (Precedence)

When syntax is ambiguous, interpret in this order:

1. Group block `X { ... }`
2. Edge `A-->B`
3. Explicit declaration (node, id as "label")
4. Standalone node reference

## 9. Comments

The following are recognized and ignored:

- `//` line comment
- `#` line comment
- `/* */` block comment

## 10. Normalization (Recommended Implementation)

Implementations may normalize by: removing comments; replacing `,` and `;` with `\n`; collapsing consecutive newlines to one; then parsing line by line. This allows one-liner, multi-line, and mixed notation to be handled by the same logic.

## 11. Layout (Reserved)

```
layout {
  node <NodeID> {x= y= [w=] [h=]}
  group <GroupID> {x= y= w= h=}
  edge <EdgeID> [ { src_side= top|right|bottom|left, src_t= 0..1, dst_side= ..., dst_t= 0..1 } ] [ bends {{x=,y=},...} ]
}
```

Edge anchors are src_side, src_t, dst_side, dst_t. See **RELAT-LAYOUT-SPEC.md**.

### 11.5 style Block (Reserved)

```
style {
  node <NodeID> [style]
  group <GroupID> [style]
  edge <EdgeID> [style]
  rel <RelID> [style]
}
```

See **RELAT-STYLE-SPEC.md**.

## 12. Design Summary

- Write minimal, read maximal
- Declarations optional
- Free choice of separators
- No semantic whitespace
- Tolerant of messy input

## 13. Full Example

```
HongKong{Foo,Bar}
Foo-->Bar
Woo-->Foo : link [color=red]
Tokyo-->NewYork : flight
Tokyo-->NewYork : f as "flight" [color=#00a]
```

One-liner:

```
HongKong{Foo,Bar},Foo-->Bar,Woo-->Foo : link [color=red]
```

## 14. Import Errors and Client Display

When importing invalid text, the parser recovers where possible and returns warnings. Implementations should:

- Cap parse iterations to avoid infinite loops; on exceed, emit a warning and return partial results.
- Include location (e.g. line/column or offset) in important warnings, e.g. "Missing closing } for group (line 3, column 5)".
- Allow clients to pass onWarnings in importRelat(relatText, options). When onWarnings(warnings) is called, show messages (with location) in the UI.
- Avoid throwing for non-fatal parse errors; return warnings and partial data. The client may show warnings and still apply the recovered data.
