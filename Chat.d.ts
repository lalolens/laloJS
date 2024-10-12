import React from 'react';
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
export declare const Chat: React.FC<ChatProps>;
export {};
