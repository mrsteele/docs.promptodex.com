# Authentication

Authenticate with Promptodex to access private prompts and manage your account.

## Promptodex API key

Your Promptodex API key allows the CLI and SDK to access your private prompts. You can get an API key from your account settings at [promptodex.com](https://promptodex.com).

API keys follow the format:

```
POD_live_XXXXXXX
```

## Setting your API key

### In the config file

Add your API key to `~/.promptodex/config.json`:

```json
{
  "apiKey": "POD_live_XXXXXXX"
}
```

### During setup

The `pod config` wizard will prompt you for your API key.

## AI provider API keys

To execute prompts, you also need an API key for at least one AI provider. These are configured in the `vendors` section of your config:

```json
{
  "vendors": {
    "openai": {
      "apiKey": "sk-your-openai-key"
    }
  }
}
```

See [Configuration](/cli/configuration) for full details on vendor setup.

## Private prompts

Once authenticated, private prompts work just like public ones:

```bash
pod my-private-prompt --content "Hello"
```

The CLI automatically includes your API key when fetching prompts from the registry.

## Security

- API keys are stored locally in `~/.promptodex/config.json`
- `pod show-config` masks API keys in output
- Never commit your config file to version control
- The `.promptodex/` directory should be in your `.gitignore`
