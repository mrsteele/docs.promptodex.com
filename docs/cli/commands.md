# CLI Commands

Complete reference for all `pod` CLI commands.

## `pod <slug>`

Fetch and execute a prompt from the registry.

```bash
pod summarize
pod summarize@2              # specific version
```

**Options:**

| Flag | Description |
|------|-------------|
| `--model <alias>` | Override the AI model |
| `--<variable> <value>` | Set template variables |
| `-v, --verbose` | Show verbose output |

**Examples:**

```bash
pod summarize --content "Your text here"
pod summarize --model sonnet --topic "AI"
cat article.md | pod summarize -v
```

## `pod init`

Initialize a new project in the current directory.

```bash
pod init
```

This creates:
- `promptodex.json` — tracks installed prompts and their versions
- Adds `.promptodex/` to `.gitignore` (if present)

## `pod install [name]`

Install prompts from the registry into your project.

```bash
pod install summarize          # install latest version
pod install summarize@2        # install specific version
pod install                    # install all from promptodex.json
```

**Alias:** `pod i [name]`

Installed prompts are cached in `.promptodex/cache/` and version-locked in `promptodex.json`.

## `pod uninstall <name>`

Remove a prompt from the project.

```bash
pod uninstall summarize
```

Removes the entry from `promptodex.json` and cleans up cached files.

## `pod config`

Run the interactive setup wizard.

```bash
pod config
```

Walks you through configuring:
- AI vendor selection
- API key or port entry
- Default model selection

## `pod show-config`

Display your current configuration.

```bash
pod show-config
```

Shows config file location and current settings with masked API keys.

## `pod doctor`

Run diagnostic checks on your setup.

```bash
pod doctor
```

Checks:
- Config file exists and is valid
- API keys are configured
- Registry is reachable
- Cache directory is writable
