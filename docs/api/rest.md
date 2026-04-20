# Public REST API

Promptodex exposes a small, read-only HTTP API at `/api/v1/*` for fetching prompts and collections programmatically. It's designed for agents, scripts, and external tools that need to pull prompt content without the CLI or SDK.

::: tip Prefer the SDK
If you're working in JavaScript or TypeScript, the [`promptodex` SDK](/sdk/overview) wraps this API with rendering, types, and convenience helpers. Use the raw API when you're in another language or need full control over the HTTP layer.
:::

## Base URL

```
https://promptodex.com/api/v1
```

## Authentication

| Resource | Auth required |
|----------|---------------|
| Public prompts | None |
| Public collections | None |
| Private prompts | `Authorization: Bearer POD_live_xxx` |
| Private collections | `Authorization: Bearer POD_live_xxx` |

API keys are generated on the [/account](https://promptodex.com/account) page. Only the resource owner's API key can access their private prompts or collections.

## Rate limits

- **60 requests per minute** per IP address or API key

Every response includes rate limit headers:

| Header | Description |
|--------|-------------|
| `X-RateLimit-Remaining` | Requests left in the current window |
| `X-RateLimit-Reset` | Unix timestamp when the window resets |

A `429 Too Many Requests` is returned when the limit is exceeded.

## Error responses

| Status | Meaning | Body |
|--------|---------|------|
| `401` | Missing or invalid API key for a private resource | `{}` |
| `404` | Resource not found or not accessible | `{}` |
| `429` | Rate limit exceeded | `{}` |

All errors return an empty JSON object. The HTTP status code is authoritative.

---

## Prompts

### Get latest prompt

```http
GET /api/v1/prompts/{slug}
```

Returns the latest version of a prompt.

#### Example

```http
GET /api/v1/prompts/summarize HTTP/1.1
Host: promptodex.com
Accept: application/json
Authorization: Bearer POD_live_abc123   # only for private prompts
```

#### Response — `200 OK`

```json
{
  "slug": "my-prompt-slug",
  "description": "A short description of the prompt.",
  "content": "Hello, {{name}}!",
  "variables": [
    { "name": "name", "defaultValue": "world", "required": true }
  ],
  "author": "johndoe",
  "model": {
    "id": "gpt-4",
    "name": "gpt-4",
    "provider": "openai"
  },
  "modelSettings": {
    "temperature": 0.7,
    "topP": 1,
    "maxTokens": 2048
  },
  "tags": ["writing", "productivity"],
  "version": 3,
  "latestVersion": 3,
  "isPrivate": false,
  "createdAt": "2026-04-01T12:00:00.000Z",
  "updatedAt": "2026-04-10T15:30:00.000Z"
}
```

### Get a specific prompt version

```http
GET /api/v1/prompts/{slug}/{version}
```

Version numbers are 1-indexed (1 = first published version).

The response shape matches the latest-prompt endpoint, but **replaces** `updatedAt` with:

| Field | Type | Description |
|-------|------|-------------|
| `commitMessage` | `string` | Author's note for this version |
| `versionCreatedAt` | `string` (ISO) | When this version was published |

### Response fields

<div v-pre>

| Field | Type | Description |
|-------|------|-------------|
| `slug` | `string` | Unique prompt identifier |
| `description` | `string` | Short author-provided description |
| `content` | `string` | Raw prompt template (with `{{variable}}` placeholders) |
| `variables` | `Variable[]` | Declared variables with defaults and required flags |
| `author` | `string` | Author's username |
| `model` | `Model \| undefined` | Recommended model identity — only present when set |
| `modelSettings` | `ModelSettings \| undefined` | Recommended model parameters — only present when set |
| `tags` | `string[]` | Category and discovery tags |
| `version` | `number` | Version returned by this response |
| `latestVersion` | `number` | Most recent published version |
| `isPrivate` | `boolean` | `true` if the prompt is private |
| `createdAt` | `string` | ISO timestamp when the prompt was first created |
| `updatedAt` | `string` | (Latest endpoint) ISO timestamp of most recent update |
| `commitMessage` | `string` | (Versioned endpoint) Commit message for this version |
| `versionCreatedAt` | `string` | (Versioned endpoint) ISO timestamp of this version |

</div>

`ModelSettings` may contain any of: `temperature`, `topP`, `maxTokens`, `frequencyPenalty`, `presencePenalty`.

---

## Collections

### Get collection by slug {#get-collection}

```http
GET /api/v1/collections/{slug}
```

Returns a collection's metadata and the prompts it contains.

::: warning No list endpoint
Collections can only be fetched by slug. There is no endpoint to list all collections.
:::

Private collections require the owner's API key in the `Authorization` header.

#### Response — `200 OK`

```json
{
  "slug": "my-collection",
  "name": "My Collection",
  "description": "A set of useful prompts.",
  "author": "johndoe",
  "isPrivate": false,
  "itemCount": 2,
  "items": {
    "my-prompt-slug": 2,
    "another-prompt-slug": ""
  },
  "createdAt": "2026-04-01T12:00:00.000Z",
  "updatedAt": "2026-04-10T15:30:00.000Z"
}
```

#### `items` map

The `items` object maps each prompt slug to its pin state:

| Value | Meaning |
|-------|---------|
| A version number (e.g. `2`) | Collection is pinned to that specific version |
| Empty string `""` | Collection always resolves to the **latest** version |

To fetch the actual prompt content, call `GET /api/v1/prompts/{slug}` (unpinned) or `GET /api/v1/prompts/{slug}/{version}` (pinned) for each entry.

See [Collections](/registry/collections) for the concept overview.

---

## Notes

- Slugs are unique and immutable.
- The API is **read-only** — prompt and collection creation/editing happen through the Promptodex website.
- All timestamps are ISO 8601 strings.
- `isPrivate` is consistent across both prompt and collection endpoints: `false` = public, `true` = private.

## Next Steps

- [SDK API Reference](/api/sdk) — Higher-level wrapper for JS/TS
- [Collections](/registry/collections) — Concept overview
- [Authentication](/cli/authentication) — Generating and using API keys
