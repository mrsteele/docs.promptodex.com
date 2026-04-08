# Best Practices

Tips for writing prompts that are clear, reusable, and easy to collaborate on.

## Be specific

Vague prompts produce vague results. Be explicit about what you want:

```
❌ Summarize this.

✅ Summarize the following article in 3 concise bullet points, focusing on key takeaways:

{{content}}
```

## Use descriptive variable names

Good variable names make the prompt self-documenting:

```
❌ {{x}} {{y}} {{z}}

✅ {{topic}} {{language}} {{content}}
```

## Set sensible defaults

If a variable has a reasonable common value, set it as the default:

```
{{language:english}}
{{tone:professional}}
{{format:markdown}}
```

This way, the prompt works immediately without requiring all variables.

## Structure with line breaks

Use spacing to separate instructions from content:

```
You are a {{role:technical writer}}.

Your task: {{task}}

Rules:
- Be concise
- Use active voice
- Target {{audience:developers}}

Content to process:
{{content}}
```

## One prompt, one job

Keep prompts focused on a single task. It's better to chain two focused prompts than to have one that tries to do everything:

```bash
# Better: chain focused prompts
cat article.md | pod summarize | pod tweet-thread

# Worse: one prompt that summarizes AND creates tweets
cat article.md | pod summarize-and-tweet
```

## Test with different inputs

Before publishing, test your prompt with:

- Short and long inputs
- Different languages (if applicable)
- Edge cases (empty content, unusual formatting)

## Write a good description

When publishing on Promptodex, include a clear description so others know:

- What the prompt does
- What variables it expects
- What kind of output to expect

## Version thoughtfully

Make meaningful changes between versions. If you're making a breaking change to variables, publish a new version so existing users aren't affected.
