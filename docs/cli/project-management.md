# Project Management

Use `pod init` and `pod install` to manage prompts at the project level — like `npm` for prompts.

## Initialize a project

```bash
pod init
```

This creates a `promptodex.json` in your project directory and adds `.promptodex/` to your `.gitignore`.

## promptodex.json

This file tracks which prompts your project uses and their pinned versions:

```json
{
  "prompts": {
    "summarize": "2",
    "translate": "1"
  }
}
```

Commit this file to version control so your team uses the same prompt versions.

## Install prompts

```bash
pod install summarize          # install latest
pod install summarize@2        # install specific version
pod install                    # install all from promptodex.json
```

Installed prompts are cached locally in `.promptodex/cache/`:

```
.promptodex/cache/summarize/2.json
.promptodex/cache/translate/1.json
```

## Uninstall prompts

```bash
pod uninstall summarize
```

Removes the prompt from `promptodex.json` and cleans up cached files.

## Global vs. project cache

| | Global cache | Project cache |
|---|---|---|
| **Location** | `~/.promptodex/cache/` | `.promptodex/cache/` |
| **Created by** | `pod <slug>` (direct run) | `pod install` |
| **Shared** | Across all projects | Per project |
| **Version locked** | No | Yes, via `promptodex.json` |

## Team workflow

1. Run `pod init` in your project
2. Install the prompts you need: `pod install summarize`
3. Commit `promptodex.json` to git
4. Team members run `pod install` to get the same versions
5. Update prompts with `pod install summarize@3` when ready
