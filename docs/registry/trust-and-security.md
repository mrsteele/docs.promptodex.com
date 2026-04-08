# Trust & Security

How Promptodex keeps the registry trustworthy and your data safe.

## Prompt transparency

Public prompts are fully visible — you can read the entire prompt content before using it. There's no hidden logic.

## Namespaces and attribution

Every prompt is tied to a user namespace (`username/prompt-slug`), so you always know who authored a prompt. Forks maintain attribution to the original.

## Version history

Every change is versioned. You can inspect the full history of any prompt to see what changed and when.

## API key security

- API keys are sent via the `Authorization` header as Bearer tokens (HTTPS only)
- The CLI masks API keys when displaying config (`pod show-config`)
- Keys are stored locally in `~/.promptodex/config.json` — never transmitted except for authentication

## Private prompts

Private prompts are only accessible with a valid API key. They don't appear in search results, can't be forked, and aren't visible to other users.

## Best practices

- **Read before you run** — review any public prompt's content before executing it
- **Pin versions** — use `@version` syntax in production to prevent unexpected changes
- **Use reputable authors** — check the author's profile and other prompts
- **Keep keys safe** — use environment variables, not hardcoded keys
