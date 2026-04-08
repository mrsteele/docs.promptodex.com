# Pipelines

Chain prompts together by piping the output of one into the input of the next.

## Basic pipeline

```bash
cat article.md | pod summarize | pod tweet-thread
```

This takes an article, summarizes it, then generates a tweet thread from the summary.

## Real-world examples

### Code review pipeline

```bash
git diff HEAD~1 | pod code-review | pod summarize
```

Review code changes and then summarize the review.

### Content localization

```bash
cat blog-post.md | pod translate --language spanish | pod format-html
```

Translate content and then format it for HTML.

### Research pipeline

```bash
curl -s https://example.com/paper | pod summarize | pod extract-key-points
```

Fetch a paper, summarize it, and extract the key takeaways.

## How it works

Each `pod` command:

1. Reads stdin (the piped input)
2. Uses it as the prompt's content variable
3. Sends the rendered prompt to the AI model
4. Prints the response to stdout

Since output goes to stdout, it can be piped to the next command seamlessly.

## Tips

- Keep each prompt focused on a single task for best results
- Use `--model` flags if different steps benefit from different models
- Add `-v` to individual steps for debugging
