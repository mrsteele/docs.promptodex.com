# Using Promptodex in Code

The `promptodex` npm package lets you load and render prompts from the Promptodex registry directly in your JavaScript or TypeScript applications.

::: warning Important
The SDK **does not run AI models**. It fetches prompts, renders templates with your variables, and returns the final prompt string. You then pass that string to your AI provider of choice.
:::

## Install

```bash
npm install promptodex
```

## Quick example

```javascript
import { pod } from "promptodex";

// Fetch, render, and return the prompt as a string
const prompt = await pod("summarize", {
  topic: "AI safety",
  content: articleText,
});

// Use the prompt with any AI provider
const response = await openai.chat.completions.create({
  model: "gpt-4.1",
  messages: [{ role: "user", content: prompt }],
});
```

## What the SDK provides

| Function | Purpose |
|----------|---------|
| [`pod()`](/api/sdk#pod) | Fetch a prompt and render it with variables in one call |
| [`fetchPrompt()`](/api/sdk#fetchprompt) | Fetch a prompt without rendering |
| [`renderPrompt()`](/api/sdk#renderprompt) | Render a template string with variables (no fetch) |

## Why separate prompt fetching from AI execution?

This design gives you full control over:

- **Which AI provider** you use (OpenAI, Anthropic, local models, etc.)
- **How you call** the AI (streaming, batching, retries)
- **What you do** with the prompt before sending it
- **Error handling** — prompt loading and AI execution are independent concerns

## Requirements

- Node.js >= 18 (uses native `fetch`)
- Zero dependencies

## Next Steps

- [Node.js](/sdk/nodejs) — Detailed usage examples
- [TypeScript](/sdk/typescript) — Type-safe usage
- [Private Prompts](/sdk/private-prompts) — Access private prompts in code
- [SDK API Reference](/api/sdk) — Full API documentation
