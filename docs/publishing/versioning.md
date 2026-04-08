# Versioning

Every edit to a prompt creates a new version. This lets you iterate without breaking existing users.

## How versioning works

Versions are numbered sequentially: 1, 2, 3, and so on. Every time you save an edit to a prompt, the version number increments.

## Fetching versions

By default, the **latest version** is always returned:

::: code-group

```bash [CLI]
pod summarize              # latest version
pod summarize@2            # version 2 specifically
```

```javascript [SDK]
await pod("summarize");        // latest version
await pod("summarize@2");      // version 2 specifically
```

:::

## Version pinning in projects

When you use `pod install`, the version is locked in `promptodex.json`:

```json
{
  "prompts": {
    "summarize": "2",
    "translate": "1"
  }
}
```

This ensures your team always uses the same version. Update deliberately with:

```bash
pod install summarize@3
```

See [Version Pinning](/advanced/version-pinning) for advanced strategies.

## Comparing versions

On [promptodex.com](https://promptodex.com), you can view the full history of a prompt and compare any two versions side by side.

## Best practices

- **Don't break variables** — if version 1 uses `{{content}}`, version 2 should too (or add new variables with defaults)
- **Use defaults for new variables** — `{{format:markdown}}` won't break existing users who don't pass `format`
- **Document changes** — update the description when making significant changes
- **Pin in production** — use `@version` syntax in production code to avoid surprises
