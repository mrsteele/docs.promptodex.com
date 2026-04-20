# Version Pinning

Lock prompts to specific versions for stability in production.

## Why pin versions?

Prompt authors can update their prompts at any time. Without pinning, you always get the latest version — which could include breaking changes like renamed variables or different behavior.

## Pin in the CLI

Use `@version` syntax:

```bash
pod summarize@2
```

## Pin in code

```javascript
const prompt = await pod("summarize@2", { content: "..." });
```

## Pin in projects

Use `pod install` to lock versions in `promptodex.json`:

```bash
pod install summarize@2
```

```json
{
  "prompts": {
    "summarize": "2"
  }
}
```

After pinning, `pod summarize` in that project always uses version 2, regardless of what's latest in the registry.

## Pin in collections

[Collections](/registry/collections) support per-item pinning. When you add a prompt to a collection, choose whether to pin it:

- **Unpinned** — the collection always resolves to the latest version of that prompt
- **Pinned** — the collection locks to the exact version you saved

This is useful for curating a stable bundle of prompts that a team or pipeline can install with:

```bash
pod collection install production-stack
```

Items pinned in the collection install that version; unpinned items install latest.

## When to update

- Review new versions on [promptodex.com](https://promptodex.com) before updating
- Test the new version locally before updating `promptodex.json`
- Update with: `pod install summarize@3`

## Recommended strategy

| Environment | Approach |
|-------------|----------|
| Development | Use latest (`pod summarize`) for newest features |
| Staging | Pin versions, test before promoting |
| Production | Always pin (`pod summarize@2` or via `promptodex.json`) |
