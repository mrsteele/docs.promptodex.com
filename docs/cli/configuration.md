# Configuration

The CLI stores configuration in `~/.promptodex/config.json`.

## Interactive setup

The easiest way to configure:

```bash
pod config
```

## Manual configuration

Create or edit `~/.promptodex/config.json`:

```json
{
  "apiKey": "your-promptodex-api-key",
  "defaultModel": "4.1",
  "vendors": {
    "openai": {
      "apiKey": "sk-your-openai-key"
    },
    "anthropic": {
      "apiKey": "sk-your-anthropic-key"
    },
    "xai": {
      "apiKey": "xai-your-key"
    },
    "localhost": {
      "port": 11434
    }
  },
  "models": {
    "4.1": {
      "vendor": "openai",
      "model": "gpt-4.1"
    },
    "sonnet": {
      "vendor": "anthropic",
      "model": "claude-sonnet-4"
    },
    "grok": {
      "vendor": "xai",
      "model": "grok-3"
    },
    "llama": {
      "vendor": "localhost",
      "model": "llama3.2"
    }
  }
}
```

## Config fields

| Field | Description |
|-------|-------------|
| `apiKey` | (Optional) Your Promptodex API key for accessing private prompts |
| `defaultModel` | The model alias used when no model is specified |
| `vendors` | API keys/config for each AI provider |
| `models` | Model aliases mapping to a vendor and model ID |

## Supported vendors

| Vendor | Config | Models |
|--------|--------|--------|
| **OpenAI** | `apiKey` | GPT-4.1, GPT-4o, o1, etc. |
| **Anthropic** | `apiKey` | Claude Sonnet 4, Claude Opus 4, etc. |
| **xAI** | `apiKey` | Grok-3, Grok-2, etc. |
| **Localhost** | `port` | Ollama, LMStudio, any OpenAI-compatible server |

## Model resolution

The CLI picks a model in this order:

1. `--model` flag (if specified)
2. Prompt's recommended model (if the prompt suggests one)
3. `defaultModel` from config

## Model aliases

You define model aliases in the `models` section. Each alias maps to a vendor and model ID:

```json
{
  "models": {
    "fast": {
      "vendor": "openai",
      "model": "gpt-4.1-mini"
    }
  }
}
```

Then use it:

```bash
pod summarize --model fast
```

## View current config

```bash
pod show-config
```

## Troubleshoot config

```bash
pod doctor
```

This checks if your config is valid and your API keys are working.
