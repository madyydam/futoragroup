import { useState, useRef, useEffect, memo, useCallback } from 'react';
import type { FC, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
    Bot, 
    Send, 
    X, 
    RotateCcw, 
    ExternalLink, 
    ArrowRight,
    MessageSquare
} from 'lucide-react';
import { findBestAnswer, DEFAULT_SUGGESTIONS } from '../data/chatbotKnowledge';
import './FutoraChatbot.css';

interface ChatMessage {
    id: string;
    sender: 'user' | 'bot';
    text: string;
    timestamp: string;
    links?: { label: string; url: string; isExternal?: boolean }[];
    suggestions?: string[];
}

const formatTime = (): string => {
    const date = new Date();
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const FutoraChatbot: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: 'welcome-msg',
            sender: 'bot',
            text: 'Hello! I am **Futora AI**, your ecosystem assistant. Ask me about our proprietary platforms (FutoraPay, FutoraOne, Futora AI), our 9 Technology & Growth Service domains, or Founder Madhur Dhadve.',
            timestamp: formatTime(),
            links: [
                { label: 'Products', url: '/companies' },
                { label: 'Growth Services', url: '/services' }
            ],
            suggestions: DEFAULT_SUGGESTIONS
        }
    ]);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const focusTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const navigate = useNavigate();

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
            if (focusTimerRef.current) clearTimeout(focusTimerRef.current);
            focusTimerRef.current = setTimeout(() => inputRef.current?.focus(), 150);
        }
    }, [isOpen, messages, isTyping, scrollToBottom]);

    useEffect(() => {
        return () => {
            if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
            if (focusTimerRef.current) clearTimeout(focusTimerRef.current);
        };
    }, []);

    const handleSend = useCallback((textToSend?: string) => {
        const query = (textToSend || input).trim();
        if (!query || isTyping) return;

        const userMsg: ChatMessage = {
            id: `user-${Date.now()}`,
            sender: 'user',
            text: query,
            timestamp: formatTime()
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Simulate AI thinking and response generation
        if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
        typingTimerRef.current = setTimeout(() => {
            const result = findBestAnswer(query);
            const botMsg: ChatMessage = {
                id: `bot-${Date.now()}`,
                sender: 'bot',
                text: result.answer,
                timestamp: formatTime(),
                links: result.links,
                suggestions: result.suggestions
            };

            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, 400);
    }, [input, isTyping]);

    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();
        handleSend();
    }, [handleSend]);

    const handleReset = useCallback(() => {
        setMessages([
            {
                id: `welcome-reset-${Date.now()}`,
                sender: 'bot',
                text: 'Conversation reset. How can I assist you with Futora Group today?',
                timestamp: formatTime(),
                suggestions: DEFAULT_SUGGESTIONS
            }
        ]);
        setInput('');
    }, []);

    const handleLinkClick = useCallback((url: string, isExternal?: boolean) => {
        if (isExternal) {
            window.open(url, '_blank', 'noopener,noreferrer');
        } else {
            navigate(url);
            setIsOpen(false);
        }
    }, [navigate]);

    // Simple markdown bold & newline renderer
    const renderFormattedText = (text: string) => {
        const lines = text.split('\n');
        return lines.map((line, lineIdx) => {
            const parts = line.split(/(\*\*.*?\*\*)/g);
            return (
                <span key={lineIdx} style={{ display: 'block', marginBottom: lines.length > 1 ? '4px' : 0 }}>
                    {parts.map((part, partIdx) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={partIdx} style={{ color: '#00ffff' }}>{part.slice(2, -2)}</strong>;
                        }
                        return part;
                    })}
                </span>
            );
        });
    };

    const lastBotMessage = [...messages].reverse().find((m) => m.sender === 'bot');

    return (
        <div className="futora-chatbot-wrapper">
            {/* Launcher Button */}
            <motion.button
                className="chatbot-launcher"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close AI Assistant' : 'Open Futora AI Assistant'}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
            >
                {isOpen ? <X size={18} /> : <Bot size={21} />}
                {!isOpen && <span className="chatbot-launcher-ping" />}
            </motion.button>

            {/* Chat Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chatbot-window"
                        initial={{ opacity: 0, y: 20, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.92 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                    >
                        {/* Header */}
                        <div className="chatbot-header">
                            <div className="chatbot-header-left">
                                <div className="chatbot-avatar">
                                    <Bot size={15} />
                                </div>
                                <div className="chatbot-header-info">
                                    <span className="chatbot-title">Futora AI</span>
                                    <span className="chatbot-status">
                                        <span className="status-dot" /> Online
                                    </span>
                                </div>
                            </div>
                            <div className="chatbot-header-actions">
                                <button 
                                    className="chatbot-action-btn"
                                    onClick={handleReset}
                                    title="Reset Conversation"
                                    aria-label="Reset Conversation"
                                >
                                    <RotateCcw size={12} />
                                </button>
                                <button 
                                    className="chatbot-action-btn"
                                    onClick={() => setIsOpen(false)}
                                    title="Minimize"
                                    aria-label="Minimize Chat"
                                >
                                    <X size={13} />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="chatbot-messages">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`chat-message ${msg.sender}`}>
                                    <div className="chat-bubble">
                                        {renderFormattedText(msg.text)}

                                        {/* Embedded Action Links */}
                                        {msg.links && msg.links.length > 0 && (
                                            <div className="chat-links">
                                                {msg.links.map((link, idx) => (
                                                    <button
                                                        key={idx}
                                                        className="chat-link-btn"
                                                        onClick={() => handleLinkClick(link.url, link.isExternal)}
                                                    >
                                                        {link.label}
                                                        {link.isExternal ? <ExternalLink size={11} /> : <ArrowRight size={11} />}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <span className="chat-message-time">{msg.timestamp}</span>
                                </div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <div className="chat-message bot">
                                    <div className="chat-bubble typing-bubble">
                                        <span className="typing-dot" />
                                        <span className="typing-dot" />
                                        <span className="typing-dot" />
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggestion Chips */}
                        {!isTyping && lastBotMessage?.suggestions && lastBotMessage.suggestions.length > 0 && (
                            <div className="chatbot-suggestions">
                                {lastBotMessage.suggestions.slice(0, 3).map((sug, idx) => (
                                    <button
                                        key={idx}
                                        className="suggestion-chip"
                                        onClick={() => handleSend(sug)}
                                    >
                                        <MessageSquare size={10} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                                        {sug}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input Form */}
                        <form className="chatbot-input-form" onSubmit={handleSubmit}>
                            <input
                                ref={inputRef}
                                type="text"
                                className="chatbot-input"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask Futora AI..."
                                disabled={isTyping}
                                aria-label="Chat query input"
                            />
                            <button
                                type="submit"
                                className="chatbot-send-btn"
                                disabled={!input.trim() || isTyping}
                                aria-label="Send message"
                            >
                                <Send size={13} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default memo(FutoraChatbot);
