# CLI Installation

Install the official Promptodex CLI to run prompts from your terminal.

## Install globally

```bash
npm install -g pod-cli
```

This makes the `pod` command available everywhere.

## Use with npx

If you don't want to install globally:

```bash
npx pod-cli summarize
```

## Alias

The CLI registers as `pod`. If there's a naming conflict on your system, you can also use `promptodex` as the command name — both work identically.

## Verify installation

```bash
pod --help
```

## Requirements

- **Node.js >= 18** — the CLI uses native `fetch`

## Initial setup

After installing, configure your AI provider:

```bash
pod config
```

This interactive wizard walks you through:

1. Choosing a vendor (OpenAI, Anthropic, xAI, or localhost)
2. Entering your API key or port
3. Setting a default model

See [Configuration](/cli/configuration) for manual setup.

## Next Steps

- [Commands](/cli/commands) — Full CLI command reference
- [Configuration](/cli/configuration) — Manual config file setup
