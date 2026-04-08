# Using Variables

Variables make prompts dynamic. Instead of a static prompt, you get a reusable template.

## How variables work

A prompt might contain:

```
Translate the following text to {{language}}:

{{content}}
```

When you run the prompt, you supply values for each variable:

```bash
pod translate --language spanish --content "Hello, how are you?"
```

The CLI replaces `{{language}}` with `spanish` and `{{content}}` with your text before sending it to the AI model.

## Default values

Some variables have defaults. In the prompt, they look like:

```
{{language:english}}
```

If you don't pass `--language`, it defaults to `english`. If you do pass it, your value overrides the default.

```bash
# Uses default language (english)
pod translate --content "Hello world"

# Overrides to spanish
pod translate --language spanish --content "Hello world"
```

## Multiple variables

Pass as many variables as the prompt requires:

```bash
pod generate-email --tone formal --topic "project update" --recipient "team"
```

## Variables in code

When using the SDK, pass variables as an object:

```javascript
import { pod } from "promptodex";

const prompt = await pod("translate", {
  language: "spanish",
  content: "Hello, how are you?",
});
```

## Next Steps

- [Piping Input](/quick-start/piping-input) — Use stdin for longer content
- [Writing Prompts → Variables](/writing-prompts/variables) — Full variable reference
