# Adrian's Portfolio

## Chat API Control

To control the chat functionality and save OpenAI API credits, you can set an environment variable:

1. In your `.env` or `.env.local` file, add:
   ```
   DISABLE_CHAT_API=true
   ```

2. Set to `true` to disable API calls completely
3. Set to `false` or leave empty to enable API calls

When disabled:
- A notice will appear in the chat UI
- The input field will be disabled
- API calls will not be made, saving your OpenAI credits 