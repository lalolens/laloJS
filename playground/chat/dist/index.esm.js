import React, { useState, useRef } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');\n\n.chat-container {\n    height: 60vh;\n    width: 65vw;\n  }\n  \n  .chat {\n    font-family: 'Roboto';\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  \n    width: 100%;\n    height: 100%;\n    height: 80vh;\n    padding: 0.2rem;\n    color: #595959;\n  }\n  \n  .chat h1 {\n    font-size: 36px;\n    text-align: center;\n    \n  }\n  \n  .chat-pane {\n    width: 100%;\n    height: 100%;\n    height: 75vh;\n    max-height: 75vh;\n    overflow-y: auto;\n    box-sizing: border-box;\n  \n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    background-color: #f8f8f8;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n    border-radius: 20px;\n    /* border: 2px solid rgba(60, 60, 60, 0.3); */\n  }\n  \n  /* General message styling */\n  .message {\n    padding: 10px;\n    margin: 5px 0;\n    border-radius: 10px;\n    max-width: 60%;\n    width: fit-content;\n    border: none;\n    position: relative;\n    word-wrap: break-word;\n    font-size: 1.3rem;\n  }\n  \n  /* Specific styles for different roles */\n  .message.user {\n    background-color: #d1f5ff;\n    align-self: flex-end;\n    box-shadow: 0 4px 8px rgba(0, 113, 235, 0.2);\n    margin-top: 1rem;\n  }\n  \n  .message.assistant {\n    max-width: 100%;\n    border-radius: 0px;\n  }\n  \n  .input-container {\n    display: flex;\n    align-items: flex-end;\n    margin-top: 1rem;\n    width: 100%;\n  }\n  \n  .input-bubble {\n    flex: 1;\n    padding: 10px;\n    border-radius: 20px;\n    border: 2px solid #ccc;\n    margin-right: 10px;\n    resize: none;\n    overflow: hidden;\n    min-height: 20px;\n    max-height: 200px;\n  }\n  \n  .send-button {\n    padding: 10px 20px;\n    background-color: #0071EB;\n    color: white;\n    border: none;\n    border-radius: 20px;\n    cursor: pointer;\n  }\n  \n  .send-button:hover {\n    background-color: #005bb5;\n  }\n  \n  /* Custom Scrollbar Styling */\n  .chat-pane::-webkit-scrollbar {\n    width: 6px;\n  }\n  \n  .chat-pane::-webkit-scrollbar-track {\n    background: transparent !important;\n  }\n  \n  .chat-pane::-webkit-scrollbar-thumb {\n    background: linear-gradient(135deg, #0071EB, #00A8E8);\n    border-radius: 12px;\n    border: 2px solid #f0f0f0;\n    box-shadow: 0 2px 5px rgba(0, 113, 235, 0.3);\n  }\n  \n  .chat-pane::-webkit-scrollbar-thumb:hover {\n    background: linear-gradient(135deg, #005bb5, #0071EB);\n    box-shadow: 0 4px 10px rgba(0, 113, 235, 0.6);\n    transition: background 0.3s ease, box-shadow 0.3s ease;\n  }\n  \n  /* Mobile Responsiveness */\n  @media (max-width: 768px) {\n    .chat {\n      padding: 0.1rem;\n    }\n  }";
styleInject(css_248z);

const Chat = ({ initialMessages = [], title = 'Chat Plaground', placeholderText = 'Type a message...', themeColor = '#0071EB', }) => {
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

export { Chat };
