# SafeSpace AI 🌿

> *Breathe. Speak. Be heard.*

SafeSpace AI is an anonymous, privacy-first emotional support chat app powered by Google Gemini. It gives users a calm, judgment-free space to express how they're feeling — no accounts, no data stored, no judgment.

---

## 🔗 Links

| | |
|---|---|
| **Live App** | [Open SafeSpace AI](https://ai.studio/apps/drive/1TJIuEqOQ_j1KAwlzRKVqjv5p1XDiXJmc?fullscreenApplet=true) |
| **Demo Video** | [Watch on YouTube Shorts](https://youtube.com/shorts/A9mSjvFVumE?feature=share) |

---

## What it does

Users open the app and are greeted with a quiet, minimal chat interface. They can type how they're feeling, and the AI responds with empathy and support — powered by Google Gemini Flash. There are no sign-ups, no stored conversations, and no personal data collected. When the session ends, everything is gone.

Key behaviours:
- Opens with a gentle greeting: *"Hello. This is a quiet place for you to be yourself."*
- Responds to emotional input with supportive, non-clinical language
- Includes a built-in disclaimer to remind users this is AI, not therapy
- "Clear space" button resets the conversation instantly
- Fully anonymous — no auth, no backend, no database

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + TypeScript |
| Styling | Tailwind CSS |
| AI | Google Gemini Flash (via AI Studio) |
| Build tool | Vite |
| Hosting | Google AI Studio |

---

## Project structure

```
safespace-ai/
├── App.tsx              # Main app component — chat UI and state
├── types.ts             # TypeScript types (Message, ChatState, Role)
├── components/
│   ├── ChatBubble.tsx   # Individual message bubbles (user + assistant)
│   └── Disclaimer.tsx   # Persistent disclaimer shown inside chat frame
├── services/
│   └── geminiService.ts # Gemini API integration and message handling
├── index.tsx            # Entry point
└── index.html           # HTML shell
```

---

## Run locally

**Prerequisites:** Node.js 18+, a Google AI Studio API key

```bash
# 1. Clone the repo
git clone https://github.com/bp782/safespace-ai.git
cd safespace-ai

# 2. Install dependencies
npm install

# 3. Add your Gemini API key
# Create a .env file in the root:
echo "geminiService.ts" > .env

# 4. Start the dev server
npm run dev
```

Then open `http://localhost:5173` in your browser.

Get a free Gemini API key at [aistudio.google.com](https://aistudio.google.com).

---

## Design decisions

**Why anonymous?** Emotional expression requires psychological safety. Requiring an account adds friction and makes people self-censor. Removing identity removes that barrier.

**Why no message history?** Storing conversation history — even locally — creates a record of someone's emotional state. By design, nothing persists after the session ends.

**Why Gemini Flash?** Low latency matters in a support context. Waiting several seconds for a response during an emotionally difficult moment breaks the experience. Flash keeps it feeling like a real conversation.

---

## What I learned

- How to integrate the Gemini API in a React/TypeScript app
- How to manage chat state cleanly using React hooks (`useState`, `useEffect`, `useRef`)
- How UX decisions (loading dots, auto-scroll, clear button placement) significantly affect how "human" a chat interface feels
- The importance of a disclaimer component in AI apps that touch sensitive topics

---

## Disclaimer

SafeSpace AI is not a substitute for professional mental health support. If you are in crisis, please reach out to a licensed professional or a crisis helpline in your country.

---

*Built by [Bhadrapriya M S](https://github.com/bp782) — AI & ML undergraduate at Chandigarh University*
