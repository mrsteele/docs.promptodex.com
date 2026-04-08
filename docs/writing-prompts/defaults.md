# Defaults

Default values make variables optional, so prompts work out of the box while still being customizable.

## Syntax

Set a default with a colon after the variable name:

```
{{variableName:defaultValue}}
```

## Examples

```
Summarize in {{language:english}} using {{format:bullet points}}:

{{content}}
```

| Variable | Default | Can Override? |
|----------|---------|---------------|
| `language` | `english` | ✅ `--language spanish` |
| `format` | `bullet points` | ✅ `--format "numbered list"` |
| `content` | _(none)_ | Required |

## Using defaults from the CLI

Defaults are applied automatically. You only need to pass variables you want to override:

```bash
# Uses all defaults
cat article.md | pod summarize

# Overrides language
cat article.md | pod summarize --language spanish

# Overrides both
cat article.md | pod summarize --language spanish --format "numbered list"
```

## Using defaults from the SDK

Same principle — omit variables to use their defaults:

```javascript
import { pod } from "promptodex";

// Uses all defaults
const prompt = await pod("summarize", { content: articleText });

// Overrides language
const prompt = await pod("summarize", {
  content: articleText,
  language: "spanish",
});
```

## When to use defaults

Defaults work well for:

- **Language presets** — `{{language:english}}`
- **Output format** — `{{format:markdown}}`
- **Tone** — `{{tone:professional}}`
- **Count/limits** — `{{count:5}}`
- **Role definitions** — `{{role:helpful assistant}}`

Avoid defaults for content that's always unique (like the user's input text).

## Next Steps

- [Best Practices](/writing-prompts/best-practices) — Tips for writing great prompts
