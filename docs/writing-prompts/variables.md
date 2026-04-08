# Variables

Variables are the core of what makes Promptodex prompts reusable. They let you create templates that adapt to any context.

## Syntax

Variables use double curly braces:

```
{{variableName}}
```

Whitespace inside the braces is trimmed, so these are all equivalent:

```
{{name}}
{{ name }}
{{  name  }}
```

## Required variables

A variable without a default value is required. If no value is provided when the prompt is rendered, it becomes an empty string.

```
Write a blog post about {{topic}}.
```

When used from the CLI:

```bash
pod blog-post --topic "AI safety"
```

When used from the SDK:

```javascript
const prompt = await pod("blog-post", { topic: "AI safety" });
```

## Variables with defaults

Add a default value after a colon:

```
{{variableName:defaultValue}}
```

Example:

```
Translate the following to {{language:english}}:

{{content}}
```

If `language` isn't provided, it defaults to `english`.

## Multiple variables

Use as many variables as you need:

```
You are a {{role:assistant}} helping with {{task}}.

Please respond in {{language:english}} and keep the tone {{tone:professional}}.

{{content}}
```

## Variable naming

Variable names should be:

- **Descriptive** — `topic` is better than `t`
- **Lowercase** — `language` not `Language`
- **Hyphen/underscore-free** — use `camelCase` or single words

## Missing variables

When a variable has no default and no value is provided, it renders as an empty string:

```javascript
import { renderPrompt } from "promptodex";

renderPrompt("Hello {{name}}!", {});
// "Hello !"
```

This behavior is by design — it keeps rendering predictable and never throws errors for missing variables.

## Next Steps

- [Defaults](/writing-prompts/defaults) — More on default values
- [Best Practices](/writing-prompts/best-practices) — Write better prompts
