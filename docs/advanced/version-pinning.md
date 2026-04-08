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
