# Node.js Usage

Use the `promptodex` package to load prompts into your Node.js applications.

## Install

```bash
npm install promptodex
```

## Fetch and render a prompt

```javascript
import { pod } from "promptodex";

const prompt = await pod("summarize", {
  topic: "machine learning",
  content: "Your article text here...",
});

console.log(prompt);
// "Summarize the following article about machine learning..."
```

## Fetch a specific version

```javascript
const prompt = await pod("summarize@2", {
  content: "Your text",
});
```

## Fetch without rendering

Use `fetchPrompt()` to get the raw template:

```javascript
import { fetchPrompt } from "promptodex";

const response = await fetchPrompt("summarize");
console.log(response.slug);    // "summarize"
console.log(response.content); // "Summarize the following about {{topic}}:..."
```

## Render a template locally

If you already have the template string:

```javascript
import { renderPrompt } from "promptodex";

const result = renderPrompt("Hello {{name}}, welcome to {{place}}!", {
  name: "Matt",
  place: "Promptodex",
});
// "Hello Matt, welcome to Promptodex!"
```

## Use with OpenAI

```javascript
import { pod } from "promptodex";
import OpenAI from "openai";

const openai = new OpenAI();

const prompt = await pod("summarize", { content: articleText });

const completion = await openai.chat.completions.create({
  model: "gpt-4.1",
  messages: [{ role: "user", content: prompt }],
});

console.log(completion.choices[0].message.content);
```

## Use with Anthropic

```javascript
import { pod } from "promptodex";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic();

const prompt = await pod("summarize", { content: articleText });

const message = await anthropic.messages.create({
  model: "claude-sonnet-4-20250514",
  max_tokens: 1024,
  messages: [{ role: "user", content: prompt }],
});

console.log(message.content[0].text);
```

## Error handling

```javascript
import { pod } from "promptodex";

try {
  const prompt = await pod("nonexistent-prompt");
} catch (error) {
  console.error("Failed to fetch prompt:", error.message);
}
```

## Next Steps

- [TypeScript](/sdk/typescript) — Type-safe usage
- [Private Prompts](/sdk/private-prompts) — Access private prompts in code
