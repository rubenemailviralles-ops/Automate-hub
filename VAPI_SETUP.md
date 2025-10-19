# Vapi AI Phone Agent Setup

## Overview
The AI Phone Callers page now features a live, interactive Vapi demo that allows visitors to experience your AI phone agent in real-time.

## Setup Instructions

### 1. Create a Vapi Assistant

1. Go to [Vapi Dashboard](https://dashboard.vapi.ai)
2. Sign in to your account
3. Click "Create Assistant" or "New Assistant"
4. Configure your assistant:
   - **Name**: Give it a name (e.g., "Automate Hub Demo Agent")
   - **First Message**: What the AI says when the call starts (e.g., "Hello! Thanks for trying our AI phone agent. How can I help you today?")
   - **System Prompt**: Define the AI's personality and role (e.g., "You are a friendly and professional AI sales agent for Automate Hub, a company that provides AI automation services...")
   - **Voice**: Choose a voice that matches your brand
   - **Model**: Select the AI model (GPT-4 recommended for best results)

5. Copy the **Assistant ID** (it will look something like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

### 2. Configure Environment Variables

Create a `.env.local` file in the project root with:

```env
# Vapi Configuration
VITE_VAPI_PUBLIC_KEY=6b197fc0-3d91-4e7b-801d-801097fb79ae
VITE_VAPI_ASSISTANT_ID=your-assistant-id-here
```

Replace `your-assistant-id-here` with the Assistant ID you copied from step 1.

### 3. Restart Development Server

After adding the environment variables:

```bash
npm run dev
```

## Features

The Vapi demo includes:
- ✅ **Live Call Button**: Click to start a real AI phone conversation
- ✅ **Real-time Transcription**: See the conversation as it happens
- ✅ **Call Controls**: Mute, volume control, and end call buttons
- ✅ **Smooth Animations**: Professional animations matching your website style
- ✅ **Status Indicators**: Visual feedback for connecting, connected, and ended states
- ✅ **Call Duration Timer**: Shows how long the call has been active

## Customization

### Styling
The component uses your website's color scheme:
- Primary: Indigo/Purple gradient
- Accents: Green for active states
- Background: Dark theme with gradients

### Assistant Configuration
To customize what the AI says and how it behaves, edit your assistant in the Vapi dashboard:
- **System Prompt**: Define the AI's knowledge and personality
- **First Message**: Customize the greeting
- **Voice Settings**: Choose speed, pitch, and voice type
- **Model Settings**: Adjust temperature for creativity vs. consistency

## Troubleshooting

### "Please configure your Vapi Assistant ID" error
- Make sure you created a `.env.local` file (not `.env.example`)
- Verify the assistant ID is correctly pasted
- Restart your development server

### Call doesn't start
- Check browser console for errors
- Ensure your Vapi account is active
- Verify the assistant ID exists in your Vapi dashboard
- Check that your public API key is correct

### No transcription appearing
- Make sure the assistant is properly configured in Vapi dashboard
- Check that the microphone permissions are granted in your browser
- Verify the Vapi webhook events are being received

## API Key Security

**Important**: The public API key (`6b197fc0-3d91-4e7b-801d-801097fb79ae`) is safe to use in frontend code as it's designed for public use. However, for production:

1. Consider adding domain restrictions in your Vapi dashboard
2. Monitor usage to prevent abuse
3. Set up rate limiting if needed

## Support

For Vapi-specific issues, visit:
- [Vapi Documentation](https://docs.vapi.ai)
- [Vapi Discord Community](https://discord.gg/vapi)
- [Vapi Support](https://vapi.ai/support)

For integration issues with this website, check the component at `src/components/VapiDemo.tsx`.

