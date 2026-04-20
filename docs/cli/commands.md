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

Removes the entry from `promptodex.json`, cleans up cached files, and removes any compiled [skill](/cli/skills) artifacts for the prompt (`.promptodex/data/<slug>/` and `skills/<slug>.md`).

## `pod skill install <slug>`

Install a prompt **and** compile it into a reusable skill file at `skills/<slug>.md`.

```bash
pod skill install greet --name Matt
# → skills/greet.md
```

**Alias:** `pod skill i`

**Options:**

| Flag | Description |
|------|-------------|
| `--<variable> <value>` | Set a template variable (persisted to `.promptodex/data/<slug>/config.json`) |
| `-v, --verbose` | Show verbose output |

What it does:

1. Installs the prompt (same as `pod install <slug>`).
2. Persists your variable values and the pinned version to `.promptodex/data/<slug>/config.json`.
3. Renders the template and writes the result to `skills/<slug>.md`.
4. Warns on missing optional variables and errors on missing required variables.

See [Skills](/cli/skills) for the full workflow.

## `pod skill rebuild <slug>`

Re-fetch the latest version of an installed skill's prompt, preserve existing variable values, and recompile `skills/<slug>.md`.

```bash
pod skill rebuild greet
```

Warns when the new version introduces required variables that are not yet set.

## `pod collection install <slug>`

Install every prompt contained in a [collection](/registry/collections).

```bash
pod collection install my-code-review
```

**Alias:** `pod collection i`

Items pinned to a specific version in the collection install that version. Items with an empty version always install the latest.

## `pod collection skill install <slug>`

Install every prompt in a collection **and** compile each one as a skill.

```bash
pod collection skill install my-code-review --author "Matt"
```

**Alias:** `pod collection skill i`

Any `--<variable> <value>` flags are applied to every prompt — prompts that don't declare a given variable simply ignore it. A batch report summarizes the `ok` / `warning` / `error` status of each compiled skill.

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

## `pod doctor skills`

Scan every installed [skill](/cli/skills) in the current project and report variable coverage against the pinned prompt version.

```bash
pod doctor skills
```

For each skill, the output is one of:

| Status | Meaning |
|--------|---------|
| `ok` | All required and optional variables are satisfied |
| `warning` | One or more optional variables are missing |
| `error` | One or more required variables are missing (exits non-zero) |

Useful in CI to fail builds when a skill is missing required values.
