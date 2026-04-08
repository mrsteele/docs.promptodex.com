# Template Syntax Reference

Complete reference for the Promptodex template variable syntax.

## Basic variable

```
{{variableName}}
```

Replaced with the provided value. If no value is provided, becomes an empty string.

## Variable with default

```
{{variableName:defaultValue}}
```

Uses `defaultValue` if no value is provided.

## Whitespace handling

Whitespace inside braces is trimmed:

```
{{ name }}    → same as {{name}}
{{  name  }}  → same as {{name}}
```

## Examples

<div v-pre>

| Template | Variables | Result |
|----------|-----------|--------|
| `Hello {{name}}!` | `{ name: "World" }` | `Hello World!` |
| `Hello {{name}}!` | `{}` | `Hello !` |
| `{{greeting:Hi}} {{name}}` | `{ name: "Matt" }` | `Hi Matt` |
| `{{greeting:Hi}} {{name}}` | `{ greeting: "Hey", name: "Matt" }` | `Hey Matt` |

</div>

## Variable naming conventions

- Use descriptive names: `topic`, `language`, `content`
- Use camelCase for multi-word names: `targetLanguage`, `outputFormat`
- Avoid special characters — stick to letters and numbers
