# Installation

Get up and running with Promptodex tools in under a minute.

## pod-cli (Recommended)

The CLI is the fastest way to start using prompts from your terminal.

```bash
npm install -g pod-cli
```

Or use it without installing globally:

```bash
npx pod-cli summarize
```

::: tip Alias
The CLI installs as `pod`. If there's a naming conflict on your system, you can also use `promptodex` as the command name.
:::

### Verify the installation

```bash
pod --help
```

### Requirements

- Node.js >= 18

## promptodex SDK

If you want to use prompts in your JavaScript or TypeScript applications:

```bash
npm install promptodex
```

See [Using in Code](/sdk/overview) for full SDK documentation.

## Configure AI providers

To execute prompts (not just fetch them), the CLI needs access to an AI model. Run the setup wizard:

```bash
pod config
```

This walks you through:

1. Choosing a vendor (OpenAI, Anthropic, xAI, or localhost)
2. Entering your API key (or port for local models)
3. Setting a default model

You can also create the config file manually at `~/.promptodex/config.json`. See [CLI Configuration](/cli/configuration) for details.

## Next Steps

- [Your First Prompt](/quick-start/first-prompt) — Run a prompt in seconds
