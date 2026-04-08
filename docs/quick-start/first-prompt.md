# Your First Prompt

Let's run a prompt from the Promptodex registry in seconds.

## Run a prompt

```bash
pod summarize
```

That's it. The CLI fetches the `summarize` prompt from the registry, sends it to your configured AI model, and prints the response.

## Run a namespaced prompt

Prompts can be namespaced by author:

```bash
pod mrsteele/summarize
```

## Pass content to a prompt

Most prompts accept variables. Pass them as flags:

```bash
pod mrsteele/summarize --content "Artificial intelligence is transforming healthcare..."
```

## See what happened

Add `-v` for verbose output to see the full prompt that was sent:

```bash
pod mrsteele/summarize --content "Your text" -v
```

## Use a specific version

Pin to a version with `@` syntax:

```bash
pod summarize@1
```

## Override the model

The prompt author may recommend a model, but you can override it:

```bash
pod summarize --model sonnet
```

## Next Steps

- [Using Variables](/quick-start/using-variables) — Learn about dynamic prompts
- [Piping Input](/quick-start/piping-input) — Feed content from files and other commands
