# API Reference — CLI Commands

Quick reference for all `pod` CLI commands.

## `pod <slug>[@version]`

Fetch and execute a prompt.

| Option | Description |
|--------|-------------|
| `--model <alias>` | Override the AI model |
| `--<variable> <value>` | Set a template variable |
| `-v, --verbose` | Show verbose output |

```bash
pod summarize
pod summarize@2
pod summarize --model sonnet --topic "AI"
cat file.md | pod summarize
```

## `pod init`

Initialize a project. Creates `promptodex.json` and updates `.gitignore`.

```bash
pod init
```

## `pod install [slug[@version]]`

Install prompts into the project cache.

```bash
pod install summarize
pod install summarize@2
pod install              # install all from promptodex.json
```

**Alias:** `pod i`

## `pod uninstall <slug>`

Remove a prompt from the project.

```bash
pod uninstall summarize
```

## `pod config`

Interactive setup wizard for vendors, API keys, and default model.

```bash
pod config
```

## `pod show-config`

Display current configuration (API keys are masked).

```bash
pod show-config
```

## `pod doctor`

Run diagnostic checks on config, API keys, registry connectivity, and cache.

```bash
pod doctor
```
