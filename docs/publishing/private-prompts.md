# Private Prompts

Keep sensitive or proprietary prompts private while still using them across all Promptodex tools.

## Making a prompt private

When creating or editing a prompt on [promptodex.com](https://promptodex.com), set the visibility to **Private**. Private prompts:

- Are only visible to you
- Require an API key to access via CLI or SDK
- Don't appear in public search results
- Cannot be forked by others

## Accessing private prompts

### From the CLI

Make sure your API key is in your config:

```json
{
  "apiKey": "POD_live_XXXXXXX"
}
```

Then use the prompt normally:

```bash
pod my-private-prompt --content "Hello"
```

### From the SDK

Pass your API key in the options:

```javascript
import { pod } from "promptodex";

const prompt = await pod(
  "my-private-prompt",
  { content: "Hello" },
  { apiKey: "POD_live_XXXXXXX" }
);
```

See [Private Prompts in Code](/sdk/private-prompts) for more details.

## Use cases for private prompts

- **Company-specific** prompts with proprietary instructions
- **Work-in-progress** prompts you're not ready to share
- **Sensitive** prompts that include domain-specific context
- **Paid/premium** prompts (if monetization is available)

## Switching visibility

You can change a prompt between public and private at any time from the prompt settings on [promptodex.com](https://promptodex.com).
