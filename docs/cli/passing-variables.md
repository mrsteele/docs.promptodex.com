# Passing Variables

Pass values into prompt templates using CLI flags.

## Basic usage

Each variable in the prompt becomes a `--flag`:

```bash
pod translate --language spanish --content "Hello world"
```

For a prompt template like:

```
Translate the following to {{language}}:

{{content}}
```

## Multiple variables

Pass as many flags as the prompt requires:

```bash
pod generate-email \
  --tone formal \
  --topic "project update" \
  --recipient "engineering team"
```

## Quoted values

Use quotes for values with spaces:

```bash
pod summarize --topic "machine learning safety"
```

## Defaults

If a variable has a default value in the prompt (e.g., `{{language:english}}`), you don't need to pass it. Only pass the flag if you want to override:

```bash
# Uses default language
pod summarize --content "Your text"

# Overrides default
pod summarize --language spanish --content "Your text"
```

## Using stdin

Pipe content via stdin instead of using `--content`:

```bash
cat article.md | pod summarize --topic "AI"
```

See [Piping Input](/quick-start/piping-input) for more on stdin usage.

## Model override

The `--model` flag is not a variable — it tells the CLI which AI model to use:

```bash
pod summarize --model sonnet --content "Your text"
```
