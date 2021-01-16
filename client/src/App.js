import './App.css';
import { useState } from 'react';
import ChatInput from './ChatInput.js';

function App() {
  const [messages, setMessages] = useState([]);

  const handleNewMessage = (newMessage) => {
    setMessages(currentMessages => [...currentMessages, newMessage]);
  }

  const chatMessages = messages.map((message, index) => 
    <ul key={index}>
      {message}
    </ul>
  );

  return (
    <div className="App">
      {chatMessages}
      <ChatInput 
        onEnteredMessage={handleNewMessage}
      />
    </div>
  );
}

export default App;
