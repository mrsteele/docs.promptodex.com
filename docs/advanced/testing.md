# Prompt Testing

Strategies for testing and validating your prompts before publishing.

## Manual testing

Test your prompt locally with different inputs before publishing:

```bash
# Test with short input
echo "Hello world" | pod my-prompt

# Test with a file
cat long-article.md | pod my-prompt

# Test with different variables
pod my-prompt --tone formal --topic "finance"
pod my-prompt --tone casual --topic "cooking"
```

## Version comparison

Use version pinning to compare prompt versions:

```bash
# Compare version 1 vs 2
echo "Test input" | pod my-prompt@1
echo "Test input" | pod my-prompt@2
```

## Testing in code

Use `renderPrompt()` to test template rendering without making API calls:

```javascript
import { renderPrompt } from "promptodex";

const result = renderPrompt("Hello {{name}}, your {{item}} is ready.", {
  name: "Alice",
  item: "order",
});

console.assert(result === "Hello Alice, your order is ready.");
```

## Test missing variables

Verify your prompt handles missing variables gracefully:

```javascript
import { renderPrompt } from "promptodex";

// Missing variables become empty strings
const result = renderPrompt("Hello {{name}}!", {});
console.log(result); // "Hello !"
```

## Checklist before publishing

- [ ] Test with typical inputs
- [ ] Test with edge cases (empty input, very long input)
- [ ] Verify all variables are documented
- [ ] Confirm default values are sensible
- [ ] Test with multiple AI models if applicable
