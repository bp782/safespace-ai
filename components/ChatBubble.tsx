
import React from 'react';
import { Message } from '../types';

interface ChatBubbleProps {
  message: Message;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex w-full mb-6 ${isUser ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-500`}>
      <div
        className={`max-w-[85%] md:max-w-[70%] p-4 rounded-2xl shadow-sm border ${
          isUser
            ? 'bg-indigo-50 border-indigo-100 text-indigo-900 rounded-tr-none'
            : 'bg-white border-gray-100 text-gray-800 rounded-tl-none'
        }`}
      >
        <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">
          {message.content}
        </p>
        <div className={`mt-2 text-[10px] font-medium opacity-40 uppercase tracking-widest ${isUser ? 'text-right' : 'text-left'}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};
