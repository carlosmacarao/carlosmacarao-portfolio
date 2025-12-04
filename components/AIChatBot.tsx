import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, Language } from '../types';
import { translations } from '../translations';

interface AIChatBotProps {
  language: Language;
}

const AIChatBot: React.FC<AIChatBotProps> = ({ language }) => {
  const t = translations[language].chatbot;
  const [isOpen, setIsOpen] = useState(false);
  
  // Initialize messages. We monitor language change to update the *initial* message if the chat hasn't started yet.
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Only reset the welcome message if the user hasn't started chatting or if the history is just the welcome message
    if (!hasInteracted) {
        setMessages([{ role: 'model', text: t.welcome }]);
    }
  }, [language, t.welcome, hasInteracted]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    setHasInteracted(true);
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Prepare history for Gemini
      const history = messages.map(m => ({
        role: m.role === 'model' ? 'model' : 'user',
        parts: [{ text: m.text }]
      }));

      // We append a small context hint about the user's language preference invisibly to the prompt logic if needed,
      // but usually, the model replies in the language of the prompt.
      // However, we can also pass the language context if we modified the service. 
      // For now, reliance on the user's input language is standard behavior.
      const responseText = await sendMessageToGemini(history, userMessage);

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: t.error, isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-24 right-8 z-40 p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
            isOpen ? 'bg-slate-800 rotate-90 text-white' : 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:scale-110'
        }`}
        aria-label="Toggle AI Chat"
      >
        {isOpen ? <X size={24} /> : <div className="relative"><MessageSquare size={24} /><Sparkles size={12} className="absolute -top-1 -right-1 text-yellow-300 animate-pulse"/></div>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-40 right-4 sm:right-8 z-40 w-[90vw] sm:w-96 h-[500px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-slate-900 p-4 flex items-center space-x-3 text-white">
            <div className="bg-primary-600 p-2 rounded-full">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-bold text-sm">{t.header}</h3>
              <p className="text-xs text-slate-400">{t.poweredBy}</p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary-600 text-white rounded-br-none' 
                      : msg.isError 
                        ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-800 rounded-bl-none'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-sm border border-slate-100 dark:border-slate-700 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-bl-none shadow-sm border border-slate-100 dark:border-slate-700 flex items-center space-x-2">
                    <Loader2 size={16} className="animate-spin text-primary-600 dark:text-primary-400" />
                    <span className="text-xs text-slate-500 dark:text-slate-400">{t.thinking}</span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={t.placeholder}
                className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder-slate-400 dark:placeholder-slate-500 transition-colors"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-primary-600 text-white p-2.5 rounded-full hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="text-center mt-2">
              <span className="text-[10px] text-slate-400 dark:text-slate-500">{t.disclaimer}</span>
            </div>
          </div>

        </div>
      )}
    </>
  );
};

export default AIChatBot;