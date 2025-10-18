import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { AI_SYSTEM_PROMPT } from '../context/knowledgeBase';
import { XMarkIcon, PaperAirplaneIcon, SparklesIcon } from './Icons';

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'model';
  content: string;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onClose }) => {
  const [chat, setChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      content: '¡Hola! Soy FLACSO IA, tu asistente virtual. ¿Cómo puedo ayudarte con los procesos de pago de FLACSO?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const newChat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: AI_SYSTEM_PROMPT,
        },
      });
      setChat(newChat);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chat) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chat.sendMessage({ message: input });
      const modelMessage: Message = { role: 'model', content: response.text };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error("Error sending message to Gemini:", error);
      const errorMessage: Message = { role: 'model', content: 'Lo siento, he encontrado un problema al procesar tu solicitud. Por favor, inténtalo de nuevo.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl h-[90vh] max-h-[700px] flex flex-col">
        <header className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50 rounded-t-lg">
          <div className="flex items-center space-x-2">
            <SparklesIcon className="h-6 w-6 text-flacso-blue" />
            <h3 className="text-lg font-bold text-flacso-blue">Asistente Virtual FLACSO IA</h3>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-800">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </header>

        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'model' && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-flacso-blue text-white flex items-center justify-center">
                  <SparklesIcon className="w-5 h-5" />
                </div>
              )}
              <div className={`max-w-md lg:max-w-lg p-3 rounded-2xl ${msg.role === 'user' ? 'bg-flacso-blue-light text-white rounded-br-none' : 'bg-slate-100 text-slate-800 rounded-bl-none'}`}>
                 <div className="prose prose-sm max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>
                 </div>
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex items-end gap-2 justify-start">
               <div className="flex-shrink-0 w-8 h-8 rounded-full bg-flacso-blue text-white flex items-center justify-center">
                  <SparklesIcon className="w-5 h-5" />
                </div>
              <div className="max-w-md lg:max-w-lg p-3 rounded-2xl bg-slate-100 text-slate-800 rounded-bl-none">
                <div className="flex items-center space-x-1">
                  <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-200 flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu pregunta aquí..."
            className="flex-1 p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-flacso-blue-light focus:outline-none"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="p-2 rounded-md bg-flacso-blue text-white disabled:bg-slate-300 hover:bg-flacso-blue-light transition-colors"
          >
            <PaperAirplaneIcon className="h-6 w-6" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIAssistant;