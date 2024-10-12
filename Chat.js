import React, { useState, useRef } from 'react';
import './Chat.css';
export const Chat = ({ initialMessages = [], title = 'Chat Plaground', placeholderText = 'Type a message...', themeColor = '#0071EB', }) => {
    const [messages, setMessages] = useState(initialMessages);
    const [input, setInput] = useState('');
    const inputRef = useRef(null);
    const handleInputChange = (e) => {
        setInput(e.target.value);
        if (inputRef.current) {
            inputRef.current.style.height = 'auto';
            inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
        }
    };
    const handleSendMessage = () => {
        if (input.trim() !== '') {
            const newUserMessage = {
                role: 'user',
                content: input,
            };
            // Example dummy response from the assistant
            const assistantResponse = {
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
    React.createElement("section", { className: "chat" },
        React.createElement("h1", null, title),
        messages.length > 0 && (React.createElement("div", { className: "chat-pane" }, messages.map((message, index) => (React.createElement("div", { key: index, className: `message ${message.role}` }, message.content))))),
        React.createElement("div", { className: "input-container" },
            React.createElement("textarea", { ref: inputRef, value: input, onChange: handleInputChange, className: "input-bubble", placeholder: placeholderText, rows: 1 }),
            React.createElement("button", { onClick: handleSendMessage, className: "send-button", style: { backgroundColor: themeColor } }, "Send")))
    // </div>
    );
};
