# Creating Prompts

Publish your own prompts to the Promptodex registry.

## Create on the website

1. Go to [promptodex.com](https://promptodex.com) and sign in
2. Click **Create** to start a new prompt
3. Write your prompt content using the editor (which highlights variables in real-time)
4. Add metadata:
   - **Title** — a short descriptive name
   - **Description** — what the prompt does
   - **Tags** — categories for discovery (e.g., `coding`, `writing`, `utility`)
   - **Model recommendation** — which AI model works best
   - **Visibility** — public or private
5. Publish

## Prompt content

Write your prompt text with optional variables:

```
You are a {{role:helpful assistant}}.

{{task}}

Please respond in {{language:english}}.
```

The editor shows variable highlighting so you can see which parts are dynamic.

## After publishing

Once published, your prompt is immediately available:

```bash
# From the CLI
pod your-username/your-prompt --task "Explain quantum computing"
```

```javascript
// From code
import { pod } from "promptodex";
const prompt = await pod("your-prompt", {
  task: "Explain quantum computing",
});
```

## Forking existing prompts

You can also create prompts by forking someone else's public prompt:

1. Find a prompt you like on [promptodex.com](https://promptodex.com)
2. Click **Fork**
3. Modify it to suit your needs
4. Publish your improved version

Attribution to the original is automatic.

## Next Steps

- [Versioning](/publishing/versioning) — Manage prompt versions
- [Private Prompts](/publishing/private-prompts) — Control visibility
