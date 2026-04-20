# Collections

**Collections** are curated groups of prompts. Think of them as playlists for your prompt library — a way to organize related prompts, pin specific versions, and share curated lists with your team or the community.

## Why Collections?

As your prompt library grows, a flat list of bookmarks stops scaling. Collections let you group prompts by workflow, project, or topic:

- **"Code Review Stack"** — prompts for PR reviews, bug triage, refactoring
- **"Content Writing"** — blog outlines, SEO descriptions, social posts
- **"Team Onboarding"** — a curated set to share with new hires
- **"RAG Research"** — prompts you're evaluating for a pipeline

## Creating a collection

On any prompt page, click the **Save** button (the bookmark icon). The unified save modal lets you:

1. Bookmark the prompt
2. Add it to an existing collection, or create a new one inline

When creating a collection, you provide a name, optional description, and visibility. The slug is auto-generated from the name.

## Version pinning in collections

This is where Collections become powerful. When you add a prompt to a collection, you choose whether to pin it:

| Mode | Behavior |
|------|----------|
| **Unpinned** (default) | Collection always references the **latest** version of the prompt |
| **Pinned** | Collection locks to the **exact version** you saved, regardless of future updates |

Unpinned items are ideal for prompts you want to stay current with. Pinned items are ideal for production workflows where you want stability and to update on your own schedule.

See [Version Pinning](/advanced/version-pinning) for how pinning works across the CLI, SDK, and collections.

## Public vs. private collections

Collections mirror prompt visibility:

- **Public collections** appear on your profile and are discoverable. Anyone can browse the prompts you've curated.
- **Private collections** are only visible to you. Use them for work-in-progress curation, client-specific prompt sets, or anything you'd prefer to keep to yourself.

You can toggle visibility at any time from the collection detail page.

::: warning Private collection access
Private collections require an API key from the collection owner to access via the [API](/api/rest) or [CLI](/cli/commands#pod-collection-install-slug). Only the collection owner can generate a key that works.
:::

## Managing collections

Every collection has its own page at `https://promptodex.com/collections/[slug]`. From there you can:

- View all prompts with their version pin status
- Edit the collection name, description, and visibility
- Remove individual prompts
- Delete the collection

The **Collections** link in the Promptodex navigation shows all your collections and bookmarks in one place.

## Using collections from the CLI

Install every prompt in a collection into your project with one command:

```bash
pod collection install my-code-review
```

Items pinned to a specific version install that version. Unpinned items always install the latest.

You can also compile an entire collection into [skills](/cli/skills):

```bash
pod collection skill install my-code-review --author "Matt"
```

See [CLI Commands → collection](/cli/commands#pod-collection-install-slug) for details.

## Using collections from the API

Fetch a collection's contents programmatically:

```http
GET https://promptodex.com/api/v1/collections/my-collection
```

The response includes a map of prompt slugs to pinned versions (or `""` for unpinned). See the [Public API reference](/api/rest#get-collection) for the full schema.

## Next Steps

- [Version Pinning](/advanced/version-pinning) — How pinning works across collections, CLI, and SDK
- [Skills](/cli/skills) — Compile collections into reusable local skill files
- [Public API](/api/rest#get-collection) — Fetch collections programmatically
