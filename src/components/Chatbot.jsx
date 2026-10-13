import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  Calendar, 
  Phone, 
  MapPin, 
  RotateCcw,
  ShieldCheck,
  MessageCircleQuestion
} from 'lucide-react';
import { getChatbotResponse } from '../data/chatbotEngine';
import { HOSPITAL_INFO } from '../data/dentalData';
import './Chatbot.css';

export default function Chatbot({ openAppointmentModal, setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      time: 'Just now',
      text: `Hello! Welcome to **Firoz Dental Hospital**, Tirupati. I am the **Firoz Dental AI Assistant**.\n\nI can help you with verified details about **Dr. P. Firoz Babu (MDS)**, our dental treatments (Braces, Aligners, Implants, Root Canals), hospital location, timings, and appointments.\n\nHow can I help your smile today?`
    }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: text.trim()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    // Realistic small delay for conversational experience
    setTimeout(() => {
      const botReply = getChatbotResponse(text);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          text: botReply
        }
      ]);
      setIsTyping(false);
    }, 450);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "About Dr. P. Firoz Babu",
    "Invisible Aligners & Braces",
    "Dental Implants & Full Mouth",
    "Hospital Location & Timings",
    "How to book an appointment?"
  ];

  const resetChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        time: 'Just now',
        text: `Chat reset. I am your verified **Firoz Dental AI Assistant**. How may I assist you today?`
      }
    ]);
  };

  return (
    <div className="chatbot-root">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button 
          id="firoz-ai-chat-btn"
          className="chatbot-fab"
          onClick={() => setIsOpen(true)}
          aria-label="Open Firoz Dental AI Assistant"
        >
          <div className="fab-pulse"></div>
          <Bot size={26} className="fab-icon" />
          <span className="fab-label">Chat with AI</span>
        </button>
      )}

      {/* Floating Chat Window */}
      {isOpen && (
        <div className="chatbot-window animate-fade-in" id="firoz-ai-chat-window">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">
                <Bot size={20} />
              </div>
              <div>
                <h4 className="chat-title">Firoz Dental AI Assistant</h4>
                <div className="chat-status">
                  <span className="status-dot"></span>
                  <span>Verified Clinic Assistant • Online</span>
                </div>
              </div>
            </div>
            <div className="chat-header-actions">
              <button 
                className="chat-icon-btn" 
                onClick={resetChat} 
                title="Restart conversation"
              >
                <RotateCcw size={16} />
              </button>
              <button 
                id="close-chat-btn"
                className="chat-icon-btn" 
                onClick={() => setIsOpen(false)}
                title="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Trust Banner */}
          <div className="chat-trust-bar">
            <ShieldCheck size={14} />
            <span>Strictly verified hospital answers • No medical guesswork</span>
          </div>

          {/* Message List */}
          <div className="chat-body">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-message-row ${msg.sender}`}>
                {msg.sender === 'bot' && (
                  <div className="msg-avatar">
                    <Bot size={14} />
                  </div>
                )}
                <div className={`chat-bubble ${msg.sender}`}>
                  <div className="msg-text">
                    {msg.text.split('\n').map((line, lIdx) => {
                      if (!line) return <div key={lIdx} className="msg-spacer" />;
                      return (
                        <p key={lIdx}>
                          {line.split('**').map((part, pIdx) => {
                            if (pIdx % 2 === 1) {
                              return <strong key={pIdx}>{part}</strong>;
                            }
                            return part;
                          })}
                        </p>
                      );
                    })}
                  </div>
                  <span className="msg-time">{msg.time}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-message-row bot">
                <div className="msg-avatar">
                  <Bot size={14} />
                </div>
                <div className="chat-bubble bot typing">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Pills */}
          <div className="chat-suggestions">
            <span className="suggestions-label">
              <MessageCircleQuestion size={12} /> Suggested:
            </span>
            <div className="suggestions-scroll">
              {quickQuestions.map((q, idx) => (
                <button 
                  key={idx} 
                  className="suggestion-chip"
                  onClick={() => handleSendMessage(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Actions Row */}
          <div className="chat-quick-actions">
            <button 
              className="chat-action-btn"
              onClick={() => {
                setIsOpen(false);
                openAppointmentModal();
              }}
            >
              <Calendar size={13} /> Book Visit
            </button>
            <a 
              href={`tel:${HOSPITAL_INFO.phoneRaw}`} 
              className="chat-action-btn"
            >
              <Phone size={13} /> Call {HOSPITAL_INFO.phone}
            </a>
          </div>

          {/* Input Box */}
          <div className="chat-footer">
            <div className="chat-input-wrapper">
              <textarea
                id="chatbot-input-field"
                rows={1}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about Dr. Firoz, braces, implants..."
                className="chat-input"
              />
              <button 
                id="chatbot-send-btn"
                className="chat-send-btn"
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim()}
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
