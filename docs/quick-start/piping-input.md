# Piping Input

The CLI reads from stdin, making it easy to pipe content from files and other commands.

## Pipe a file

```bash
cat article.md | pod summarize
```

The file contents are passed to the prompt as the `content` variable (or the first variable that accepts stdin).

## Combine piping with variables

You can still pass other variables alongside piped input:

```bash
cat article.md | pod summarize --topic "machine learning"
```

## Chain prompts together

Pipe the output of one prompt into another:

```bash
cat article.md | pod summarize | pod tweet-thread
```

This summarizes an article and then generates a tweet thread from the summary.

## Use with other commands

```bash
echo "Hello world" | pod translate --language spanish
```

```bash
git diff HEAD~1 | pod code-review
```

```bash
curl -s https://example.com/article | pod summarize
```

## Next Steps

- [Writing Prompts](/writing-prompts/prompt-structure) — Learn how prompts are structured
- [CLI Commands](/cli/commands) — Full CLI reference
