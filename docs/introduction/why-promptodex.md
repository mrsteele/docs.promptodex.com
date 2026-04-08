# Why Promptodex?

If you're writing prompts directly in your code, scripts, or chat windows, you're missing out on a better workflow. Here's why Promptodex exists.

## Prompts Are Code — Treat Them That Way

Prompts are the instructions that drive your AI applications. They deserve the same rigor as source code:

| Practice | Source Code | Prompts (without Promptodex) | Prompts (with Promptodex) |
|----------|-------------|------------------------------|---------------------------|
| Version control | ✅ Git | ❌ Copy-paste | ✅ Built-in versioning |
| Collaboration | ✅ Pull requests | ❌ Shared docs | ✅ Forking & sharing |
| Reusability | ✅ Packages/modules | ❌ Duplicated strings | ✅ Variables & registry |
| Discovery | ✅ npm, GitHub | ❌ Word of mouth | ✅ Public registry |

## Key Benefits

### Separation of Concerns

Keep your prompts out of your codebase. When a prompt needs updating, change it on Promptodex — your code stays the same.

```javascript
// ❌ Prompt buried in code
const prompt = `Summarize the following article about ${topic}: ${content}`;

// ✅ Prompt managed on Promptodex
const prompt = await pod("mrsteele/summarize", { topic, content });
```

### Collaboration Without Conflicts

Multiple team members can iterate on prompts without merge conflicts. Fork a prompt, improve it, and share it back — just like open source.

### Instant Reuse

Found a great prompt? Use it immediately from the CLI or your code. No copying, no adapting — just reference it by slug.

```bash
pod mrsteele/summarize --content "Your text here"
```

### Model Flexibility

Prompts on Promptodex can recommend which AI model works best, but you can always override it. Switch between OpenAI, Anthropic, xAI, or local models without changing the prompt.

## Promptodex vs. Inline Prompts

| Feature | Inline Prompts | Promptodex |
|---------|---------------|------------|
| Versioning | Manual | Automatic |
| Sharing | Copy-paste | One-click publish |
| Variables | String interpolation | `{{variable}}` syntax with defaults |
| Testing | Ad hoc | Repeatable with pinned versions |
| Discovery | None | Public registry |
| Model flexibility | Hardcoded | Configurable per-prompt |

## Next Steps

- [Core Concepts](/introduction/core-concepts) — Learn the building blocks
- [Quick Start](/quick-start/installation) — Start using Promptodex now
