# Private Prompts in Code

Access your private prompts from the SDK using your Promptodex API key.

## API key format

```
POD_live_XXXXXXX
```

Get your API key from your account settings at [promptodex.com](https://promptodex.com).

## Using with `pod()`

Pass your API key in the options object:

```javascript
import { pod } from "promptodex";

const prompt = await pod(
  "my-private-prompt",
  { name: "Alice" },
  { apiKey: "POD_live_XXXXXXX" }
);
```

## Using with `fetchPrompt()`

```javascript
import { fetchPrompt } from "promptodex";

const response = await fetchPrompt("my-private-prompt", {
  apiKey: "POD_live_XXXXXXX",
});

console.log(response.content);
```

## Using environment variables

Keep your API key out of source code:

```javascript
import { pod } from "promptodex";

const prompt = await pod(
  "my-private-prompt",
  { name: "Alice" },
  { apiKey: process.env.PROMPTODEX_API_KEY }
);
```

```bash
PROMPTODEX_API_KEY=POD_live_XXXXXXX node app.js
```

## Security best practices

- **Never hardcode** API keys in source code
- Use **environment variables** or a secrets manager
- Add `.env` to your `.gitignore`
- Use different API keys for development and production
