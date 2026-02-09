
import { GoogleGenAI, Chat } from "@google/genai";
import { Message } from "../types";

export class SafeSpaceService {
  private ai: GoogleGenAI;
  private chatSession: Chat;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    this.chatSession = this.ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are SafeSpace AI, a calm, empathetic, and non-judgmental listener. 
        Your purpose is to provide a safe, anonymous space for users to express their feelings. 
        Respond with warmth and gentleness. 
        Do not offer unsolicited clinical advice, but acknowledge their emotions deeply. 
        If a user expresses thoughts of self-harm or deep crisis, gently provide empathy and suggest they reach out to professional emergency services or a local crisis hotline. 
        Keep your responses concise but comforting.`,
        temperature: 0.8,
        topP: 0.95,
        topK: 40,
      },
    });
  }

  async sendMessage(message: string): Promise<string> {
    try {
      const response = await this.chatSession.sendMessage({ message });
      return response.text || "I'm here, and I'm listening. Could you tell me more?";
    } catch (error) {
      console.error("Gemini API Error:", error);
      throw new Error("I'm having a little trouble connecting right now. I'm still here for you, though.");
    }
  }
}

// Singleton instance
export const safeSpaceAI = new SafeSpaceService();
