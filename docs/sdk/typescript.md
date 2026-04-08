# TypeScript

The `promptodex` package includes full TypeScript support out of the box.

## Types

```typescript
import {
  pod,
  fetchPrompt,
  renderPrompt,
  Variables,
  PromptResponse,
  FetchOptions,
  PodOptions,
} from "promptodex";
```

### `Variables`

The type for variable objects passed to prompts:

```typescript
const variables: Variables = {
  name: "Matt",
  count: 42,
  active: true,
};
```

### `PodOptions`

Options for the `pod()` function:

```typescript
interface PodOptions {
  apiKey?: string; // For private prompts
}
```

### `PromptResponse`

The response from `fetchPrompt()`:

```typescript
interface PromptResponse {
  slug: string;
  content: string;
}
```

### `FetchOptions`

Options for `fetchPrompt()`:

```typescript
interface FetchOptions {
  apiKey?: string; // For private prompts
}
```

## Example

```typescript
import { pod, Variables, PodOptions } from "promptodex";

const variables: Variables = {
  topic: "TypeScript",
  content: "Article text here...",
};

const options: PodOptions = {
  apiKey: "POD_live_XXXXXXX",
};

const prompt: string = await pod("summarize@1", variables, options);
```

## Next Steps

- [Private Prompts](/sdk/private-prompts) — Access private prompts in code
- [SDK API Reference](/api/sdk) — Full API documentation
