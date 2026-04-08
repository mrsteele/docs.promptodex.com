# Examples

Real-world examples of using Promptodex prompts.

## Summarize an article

```bash
cat article.md | pod summarize
```

```javascript
import { pod } from "promptodex";

const prompt = await pod("summarize", { content: articleText });
```

## Translate content

```bash
pod translate --language spanish --content "Hello, how are you?"
```

```javascript
const prompt = await pod("translate", {
  language: "french",
  content: "Good morning!",
});
```

## Code review

```bash
git diff HEAD~1 | pod code-review
```

## Generate a tweet thread

```bash
cat blog-post.md | pod summarize | pod tweet-thread
```

## Brand voice rewriting

```bash
echo "We sell software." | pod rewrite --tone "friendly and casual"
```

## AI commit messages

```bash
git diff --staged | pod commit-message
```

## Content localization pipeline

```bash
cat article.md | pod translate --language japanese
cat article.md | pod translate --language german
cat article.md | pod translate --language portuguese
```

## Use in an Express API

```javascript
import express from "express";
import { pod } from "promptodex";
import OpenAI from "openai";

const app = express();
const openai = new OpenAI();

app.use(express.json());

app.post("/summarize", async (req, res) => {
  const prompt = await pod("summarize", {
    content: req.body.content,
  });

  const completion = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages: [{ role: "user", content: prompt }],
  });

  res.json({ summary: completion.choices[0].message.content });
});

app.listen(3000);
```

## Use in a background job

```javascript
import { pod } from "promptodex";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic();

async function processArticle(article) {
  const prompt = await pod("summarize@2", {
    content: article.body,
    format: "bullet points",
  });

  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    messages: [{ role: "user", content: prompt }],
  });

  return message.content[0].text;
}
```
