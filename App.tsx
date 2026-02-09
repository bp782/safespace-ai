
import React, { useState, useRef, useEffect } from 'react';
import { Message, ChatState } from './types';
import { safeSpaceAI } from './services/geminiService';
import { ChatBubble } from './components/ChatBubble';
import { Disclaimer } from './components/Disclaimer';

const App: React.FC = () => {
  const [state, setState] = useState<ChatState>({
    messages: [
      {
        id: 'initial',
        role: 'assistant',
        content: "Hello. This is a quiet place for you to be yourself. How are you feeling today?",
        timestamp: new Date(),
      },
    ],
    isLoading: false,
    error: null,
  });
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [state.messages, state.isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || state.isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
      error: null,
    }));
    setInput('');

    try {
      const responseText = await safeSpaceAI.sendMessage(input);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseText,
        timestamp: new Date(),
      };
      setState(prev => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
        isLoading: false,
      }));
    } catch (err: any) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: err.message,
      }));
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="serif text-4xl md:text-5xl font-light text-gray-800 mb-2">SafeSpace AI</h1>
        <p className="text-gray-500 font-light tracking-wide text-sm">Breathe. Speak. Be heard.</p>
      </header>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col bg-white/40 backdrop-blur-md rounded-3xl shadow-xl shadow-gray-200/50 border border-white/60 overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 md:p-10 space-y-4"
        >
          {state.messages.map(msg => (
            <ChatBubble key={msg.id} message={msg} />
          ))}
          {state.isLoading && (
            <div className="flex justify-start animate-pulse">
              <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
          {state.error && (
            <div className="text-center text-red-500 text-sm py-4 bg-red-50/50 rounded-lg">
              {state.error}
            </div>
          )}
        </div>

        {/* Disclaimer inside the frame for constant visibility */}
        <div className="px-6">
          <Disclaimer />
        </div>

        {/* Input Area */}
        <div className="p-6 md:p-8 bg-gray-50/30 border-t border-gray-100">
          <form onSubmit={handleSubmit} className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tell me how you're feeling..."
              className="w-full bg-white border border-gray-200 rounded-full px-6 py-4 pr-16 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all text-gray-800 shadow-sm placeholder:text-gray-300"
              disabled={state.isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || state.isLoading}
              className={`absolute right-2 p-3 rounded-full transition-all ${
                !input.trim() || state.isLoading
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-indigo-600 hover:bg-indigo-50 active:scale-95'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
          <div className="text-center mt-3">
             <button 
               onClick={() => setState(prev => ({...prev, messages: [prev.messages[0]]}))}
               className="text-[10px] text-gray-400 uppercase tracking-widest hover:text-gray-600 transition-colors"
             >
               Clear space
             </button>
          </div>
        </div>
      </main>

      {/* Footer Decoration */}
      <footer className="mt-8 text-center text-gray-400 text-xs font-light">
        © {new Date().getFullYear()} SafeSpace AI • Anonymous & Private
      </footer>
    </div>
  );
};

export default App;
