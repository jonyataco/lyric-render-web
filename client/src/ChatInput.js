import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

function ChatInput(props) { 
  const [input, setInput] = useState("");

  // Event handler that handles when the enter key was pressed
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      props.onEnteredMessage(input);
      setInput("");
    }
  }

  // Event handler that sets the new input
  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <TextareaAutosize
      className="chat-input"
      minRows={2}
      maxRows={5}
      placeholder="Enter a message..."
      value={input}
      onKeyUp={handleEnter}
      onChange={handleChange}
    />
  );
}

export default ChatInput
