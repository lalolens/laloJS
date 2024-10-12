import React, { useState, useRef } from 'react';
import './Chat.css';

interface MessageProps {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatProps {
  initialMessages?: MessageProps[];
  title?: string;
  placeholderText?: string;
  themeColor?: string;
}

export const Chat: React.FC<ChatProps> = ({
  initialMessages = [],
  title = 'Chat Plaground',
  placeholderText = 'Type a message...',
  themeColor = '#0071EB',
}) => {
  const [messages, setMessages] = useState<MessageProps[]>(initialMessages);
  const [input, setInput] = useState<string>('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  };

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      const newUserMessage: MessageProps = {
        role: 'user',
        content: input,
      };

      // Example dummy response from the assistant
      const assistantResponse: MessageProps = {
        role: 'assistant',
        content: 'This is a response.',
      };

      setMessages((prevMessages) => [...prevMessages, newUserMessage, assistantResponse]);
      setInput('');
      if (inputRef.current) {
        inputRef.current.style.height = 'auto';
      }
    }
  };

  return (
    // <div className="chat-container">
    <section className="chat">
      <h1>{title}</h1>
      {messages.length > 0 && (
        <div className="chat-pane">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              {message.content}
            </div>
          ))}
        </div>
      )}
      <div className="input-container">
        <textarea
          ref={inputRef}
          value={input}
          onChange={handleInputChange}
          className="input-bubble"
          placeholder={placeholderText}
          rows={1}
        />
        <button onClick={handleSendMessage} className="send-button" style={{ backgroundColor: themeColor }}>
          Send
        </button>
      </div>
    </section>
    // </div>
  );
};