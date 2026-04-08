# API Reference — SDK

Full API reference for the `promptodex` npm package.

## `pod(slug, variables?, options?)` {#pod}

Fetch a prompt from the registry and render it with variables.

```typescript
async function pod(
  slug: string,
  variables?: Variables,
  options?: PodOptions
): Promise<string>
```

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `slug` | `string` | Prompt slug, optionally with `@version` suffix |
| `variables` | `Variables` | Key-value object of variable values |
| `options` | `PodOptions` | Options (e.g., `apiKey` for private prompts) |

**Returns:** `Promise<string>` — the rendered prompt text

**Example:**

```javascript
import { pod } from "promptodex";

const prompt = await pod("summarize@2", {
  topic: "AI",
  content: "Your article...",
}, {
  apiKey: "POD_live_XXXXXXX",
});
```

---

## `fetchPrompt(slug, options?)` {#fetchprompt}

Fetch a prompt from the registry without rendering.

```typescript
async function fetchPrompt(
  slug: string,
  options?: FetchOptions
): Promise<PromptResponse>
```

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `slug` | `string` | Prompt slug, optionally with `@version` suffix |
| `options` | `FetchOptions` | Options (e.g., `apiKey` for private prompts) |

**Returns:** `Promise<PromptResponse>`

```typescript
interface PromptResponse {
  slug: string;
  content: string;
}
```

**Example:**

```javascript
import { fetchPrompt } from "promptodex";

const response = await fetchPrompt("summarize");
console.log(response.content);
// "Summarize the following about {{topic}}:..."
```

---

## `renderPrompt(template, variables?)` {#renderprompt}

Render a template string with variables. No network call — works entirely locally.

```typescript
function renderPrompt(
  template: string,
  variables?: Variables
): string
```

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `template` | `string` | A template string with `{{variable}}` placeholders |
| `variables` | `Variables` | Key-value object of variable values |

**Returns:** `string` — the rendered text

**Rules:**
- `{{variableName}}` is replaced with the provided value
- Whitespace inside braces is trimmed: `{{ name }}` → same as `{{name}}`
- Missing variables become empty strings

**Example:**

```javascript
import { renderPrompt } from "promptodex";

renderPrompt("Hello {{name}}!", { name: "World" });
// "Hello World!"
```

---

## Types

```typescript
type Variables = Record<string, string | number | boolean>;

interface PodOptions {
  apiKey?: string;
}

interface FetchOptions {
  apiKey?: string;
}

interface PromptResponse {
  slug: string;
  content: string;
}
```
