# SafeSpace AI 🌿

> **Breathe. Speak. Be heard.**

SafeSpace AI is an AI-powered chat interface designed to give users a calm, non-judgmental space to express how they're feeling. It uses the Google Gemini API to generate supportive conversational responses.

This is a student project and an experimental demonstration, **not a mental-health service or a substitute for professional care**.

## Preview

- **Live demo:** [Open SafeSpace AI](https://ai.studio/apps/drive/1TJIuEqOQ_j1KAwlzRKVqjv5p1XDiXJmc?fullscreenApplet=true)
- **Demo video:** [Watch the walkthrough](https://youtube.com/shorts/A9mSjvFVumE?feature=share)

## Features

- Minimal chat interface focused on emotional expression
- AI-generated responses using Google Gemini
- Loading state and error feedback
- Clear-space control to reset the visible conversation
- Persistent in-app disclaimer that the tool is not therapy

## Tech stack

| Area | Technology |
|---|---|
| UI | React 19 + TypeScript |
| Build tool | Vite |
| AI integration | Google GenAI SDK |
| Styling | Tailwind CSS (loaded through the CDN in `index.html`) |
| Model configured in source | `gemini-3-flash-preview` |

## Run locally

### Prerequisites

- Node.js 18 or later
- npm
- A Google Gemini API key for local testing

### 1. Clone the repository

```bash
git clone https://github.com/bp782/safespace-ai.git
cd safespace-ai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the API key

Create a file named `.env.local` in the project root:

```env
GEMINI_API_KEY=your_api_key_here
```

Do not commit this file or share your API key.

**Important security note:** The current Vite configuration substitutes the key into frontend code at build time. That means a key used by this version can be exposed to people who access the built application. Use only a restricted test key with appropriate quotas for local experimentation. Before deploying publicly or using a production key, move Gemini requests behind a backend service and keep the key on the server.

### 4. Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite in your terminal. The current Vite configuration uses port **3000**.

### 5. Create a production build

```bash
npm run build
```

## How it works

1. The React interface stores the visible chat messages in component state.
2. When a user submits a message, the app sends it to the Gemini service.
3. The service requests a response from the configured Gemini model.
4. The returned response is added to the visible conversation.

The app does not implement user accounts or its own conversation database. Messages are sent to Google's Gemini API to generate responses, so do not enter sensitive or personally identifying information. Data handling by Google is governed by Google's applicable API terms and policies; this project cannot promise that prompts are never retained by the provider.

## Project structure

```text
safespace-ai/
├── App.tsx
├── types.ts
├── components/
│   ├── ChatBubble.tsx
│   └── Disclaimer.tsx
├── services/
│   └── geminiService.ts
├── index.tsx
├── index.html
├── package.json
└── vite.config.ts
```

## Responsible-use note

SafeSpace AI is intended for supportive conversation only. It does not diagnose conditions, provide clinical treatment, or replace a qualified professional. If someone may be in immediate danger or experiencing a crisis, they should contact local emergency services or a qualified crisis-support provider.

## Future improvements

- Move API requests to a backend so the API key is not exposed in the browser.
- Add clearer error handling and input validation.
- Review crisis-response behaviour and test it carefully.
- Add automated tests and document deployment steps.
- Review privacy and data-handling language before any public release.

## License

This project is available under the MIT License. See [LICENSE](LICENSE).
