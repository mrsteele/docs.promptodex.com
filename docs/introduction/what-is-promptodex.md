# What is Promptodex?

**Promptodex** is a prompt registry and version control platform for AI prompts. Think of it as **the GitHub for AI prompts** — a place where you can create, fork, share, and version your prompts.

## The Problem

Most AI prompts live in scattered places — personal notes, Slack messages, shared docs, or buried in code. When you find a prompt that works well, there's no good way to:

- **Share it** with your team or the community
- **Track changes** as you iterate on it
- **Reuse it** across different tools and contexts
- **Collaborate** with others to improve it

## The Solution

Promptodex gives every prompt a permanent home with:

- **A unique slug** — like `mrsteele/summarize` — so prompts are easy to reference
- **Version history** — every edit is tracked, so you can compare and roll back
- **Dynamic variables** — use `{{variableName}}` to make prompts reusable
- **Forking** — build on any public prompt and make it your own
- **Public and private** sharing — you control visibility

## How It Fits Together

Promptodex is more than just a website. It's an ecosystem of tools:

| Tool | What it does |
|------|-------------|
| [promptodex.com](https://promptodex.com) | Create, browse, fork, and manage prompts in the browser |
| [pod-cli](/cli/installation) | Run prompts from your terminal with a single command |
| [promptodex SDK](/sdk/overview) | Load and render prompts in your JavaScript/TypeScript applications |

All three tools work with the same prompt registry, so a prompt you create on the website can be instantly used from the CLI or loaded in your code.

## Quick Example

Create a prompt on [promptodex.com](https://promptodex.com) with this content:

```
Summarize the following content about {{topic}}:

{{content}}
```

Then use it anywhere:

::: code-group

```bash [CLI]
pod mrsteele/summarize --topic "AI safety" --content "Your article here"
```

```bash [CLI with piping]
cat article.md | pod mrsteele/summarize --topic "AI safety"
```

```javascript [Node.js]
import { pod } from "promptodex";

const prompt = await pod("mrsteele/summarize", {
  topic: "AI safety",
  content: articleText,
});
```

:::

## Next Steps

- [Why Promptodex?](/introduction/why-promptodex) — Understand the benefits over inline prompts
- [Core Concepts](/introduction/core-concepts) — Learn the key building blocks
- [Quick Start](/quick-start/installation) — Get up and running in under 3 minutes
