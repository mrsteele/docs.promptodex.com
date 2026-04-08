# Slugs

Every prompt on Promptodex has a unique **slug** — a short, URL-friendly identifier.

## How slugs work

When you create a prompt, you give it a slug. This is how it's referenced everywhere:

```
summarize
translate
tweet-thread
code-review
```

Slugs must be unique across the registry.

## Using slugs

Reference a prompt by slug from any tool:

::: code-group

```bash [CLI]
pod summarize
```

```javascript [SDK]
await pod("summarize", { content: "..." });
```

:::

## Versioned slugs

Append `@version` to pin a specific version:

```bash
pod summarize@2
```

```javascript
await pod("summarize@2", { content: "..." });
```

Without a version suffix, the latest version is always returned.
