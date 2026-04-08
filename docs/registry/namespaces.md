# Namespaces

Namespaces organize prompts by author, preventing naming conflicts and making attribution clear.

## How namespaces work

Every user on Promptodex has a namespace (their username). When you create a prompt, it lives under your namespace:

```
mrsteele/summarize
mrsteele/translate
alice/summarize
```

Two different users can both create a prompt called `summarize` without conflicts.

## Using namespaced slugs

Reference a namespaced prompt anywhere:

::: code-group

```bash [CLI]
pod mrsteele/summarize
```

```javascript [SDK]
await pod("mrsteele/summarize", { content: "..." });
```

:::

## Short slugs

In some cases, the namespace can be omitted:

```bash
pod summarize
```

The registry resolves this to the appropriate prompt. However, using the full namespaced slug is recommended for clarity and to avoid ambiguity.
