# Skills

**Skills** are compiled, version-locked prompt artifacts stored inside your project. Running `pod skill install` fetches a prompt, merges in variable values you provide, renders the template, and writes the final text to `skills/<slug>.md`.

Skills are ideal when you want a prompt file you can commit to git, review in PRs, hand to another tool, or use without making a network call at runtime.

## Why skills?

A regular `pod install` caches the raw prompt template — variables are still placeholders like <span v-pre>`{{name}}`</span>. A skill goes one step further: it pre-fills variables and saves the fully rendered prompt as a readable Markdown file.

| | `pod install` | `pod skill install` |
|---|---|---|
| Caches the template | ✅ | ✅ |
| Persists variable values | ❌ | ✅ in `config.json` |
| Renders to a file you can edit/commit | ❌ | ✅ `skills/<slug>.md` |
| Version-locked | ✅ | ✅ |

## Installing a skill

```bash
pod skill install greet --name Matt
```

This will:

1. Install the prompt `greet` (same as `pod install greet`).
2. Persist `{ "name": "Matt" }` and the pinned version to `.promptodex/data/greet/config.json`.
3. Render the template and write it to `skills/greet.md`.

**Alias:** `pod skill i`

### Options

| Flag | Description |
|------|-------------|
| `--<variable> <value>` | Set a template variable (persisted to `config.json`) |
| `-v, --verbose` | Show verbose output |

## Skill file layout

After `pod skill install greet --name Matt`, your project will contain:

```
.promptodex/
  cache/greet/<version>.json       # raw prompt template
  data/greet/config.json           # pinned version + saved variables
skills/
  greet.md                         # fully rendered prompt
```

`config.json` looks roughly like:

```json
{
  "version": "3",
  "variables": {
    "name": "Matt"
  }
}
```

Commit `skills/` and `.promptodex/data/` to git so your team uses identical rendered prompts.

## Missing variables

When you install a skill:

- Missing **optional** variables produce a **warning** and are rendered as empty strings (or their defaults, if provided).
- Missing **required** variables produce an **error**.

You can resolve errors either by:

1. Editing `.promptodex/data/<slug>/config.json` to add the missing values, then running `pod skill rebuild <slug>`
2. Re-running `pod skill install <slug> --var value`
3. Running `pod doctor skills` to see a full report across all skills

## Rebuilding a skill

Re-fetch the latest version of a skill's prompt, preserve your existing variable values, and recompile the output file:

```bash
pod skill rebuild greet
```

Use this after the prompt author publishes a new version, or after editing `config.json` by hand.

::: tip Version bumps
If the new version of a prompt introduces a new **required** variable, `pod skill rebuild` will warn you so you can supply the value before the skill is used.
:::

## Installing skills from a collection

Compile an entire [collection](/registry/collections) of prompts as skills in one step:

```bash
pod collection skill install my-code-review --author "Matt"
```

Every prompt in the collection is installed and rendered. Variable flags are applied to every prompt — prompts that don't declare a given variable simply ignore it. A batch report summarizes the `ok` / `warning` / `error` status for each skill.

## Diagnosing skills

Scan every installed skill and report variable coverage:

```bash
pod doctor skills
```

For each skill, the output is one of:

| Status | Meaning |
|--------|---------|
| `ok` | All required and optional variables are satisfied |
| `warning` | One or more **optional** variables are missing |
| `error` | One or more **required** variables are missing (exits non-zero) |

This is useful in CI to fail builds when a skill is missing required values.

## Uninstalling

```bash
pod uninstall greet
```

`uninstall` removes the prompt from `promptodex.json`, clears the cache, **and** removes any compiled skill artifacts (`.promptodex/data/<slug>/` and `skills/<slug>.md`).

## Next Steps

- [Collections](/registry/collections) — Curate prompts and install them as batches of skills
- [Project Management](/cli/project-management) — The broader `promptodex.json` workflow
- [CLI Commands](/cli/commands) — Full command reference
