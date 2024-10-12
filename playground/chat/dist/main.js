import React from 'react';
import ReactDOM from 'react-dom/client';
import { Chat } from './Chat';
import './Chat.css';
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(React.StrictMode, null,
    React.createElement(Chat, null)));
