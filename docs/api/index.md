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

Remove a prompt from the project. Also removes any compiled [skill](/cli/skills) artifacts for the prompt.

```bash
pod uninstall summarize
```

## `pod skill install <slug>[@version]`

Install a prompt and compile it into `skills/<slug>.md` with persisted variables.

**Alias:** `pod skill i`

```bash
pod skill install greet --name Matt
```

See [Skills](/cli/skills).

## `pod skill rebuild <slug>`

Re-fetch the latest prompt for an installed skill, preserve existing variables, and recompile `skills/<slug>.md`.

```bash
pod skill rebuild greet
```

## `pod collection install <slug>`

Install every prompt in a [collection](/registry/collections). Pinned items install that version; unpinned items install latest.

**Alias:** `pod collection i`

```bash
pod collection install my-code-review
```

## `pod collection skill install <slug>`

Install every prompt in a collection and compile each as a skill. Variable flags are applied to every prompt.

**Alias:** `pod collection skill i`

```bash
pod collection skill install my-code-review --author "Matt"
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

## `pod doctor skills`

Scan every installed skill and report variable coverage. Exits non-zero when any skill is missing required variables.

```bash
pod doctor skills
```

See [Skills → Diagnosing skills](/cli/skills#diagnosing-skills).
