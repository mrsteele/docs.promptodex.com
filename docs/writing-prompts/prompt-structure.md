# Prompt Structure

A Promptodex prompt is a text template that can include dynamic variables. Here's how they're structured.

## Basic prompt

At its simplest, a prompt is plain text:

```
Summarize the following article in 3 bullet points.
```

## Prompts with variables

Add variables using double curly braces to make prompts reusable:

```
Summarize the following article about {{topic}} in {{count:3}} bullet points:

{{content}}
```

This prompt has three variables:
- `topic` — required, no default
- `count` — optional, defaults to `3`
- `content` — required, no default

## Multi-line prompts

Prompts can be as long as you need. Line breaks are preserved:

```
You are a {{role:technical writer}} helping create documentation.

Your task is to {{task}} for the following content.

Rules:
- Be concise and clear
- Use active voice
- Target a {{audience:developer}} audience

Content:
{{content}}
```

## Metadata

When you create a prompt on [promptodex.com](https://promptodex.com), you can also set:

- **Title** — a human-readable name
- **Description** — what the prompt does
- **Tags/Categories** — for discovery (e.g., `coding`, `writing`, `utility`)
- **Model recommendation** — which AI model works best
- **Visibility** — public or private

## Next Steps

- [Variables](/writing-prompts/variables) — Deep dive into variable syntax
- [Defaults](/writing-prompts/defaults) — How default values work
- [Best Practices](/writing-prompts/best-practices) — Tips for writing great prompts
