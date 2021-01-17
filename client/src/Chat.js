import { useEffect, useRef, useState } from 'react';
import ChatWindow from './ChatWindow.js';
import ChatInput from './ChatInput.js';

function Chat() {
	const dummy = useRef();
  const [messages, setMessages] = useState([]);

	// Handler that handles a new message
  const handleNewMessage = (newMessage) => {
    setMessages(currentMessages => [...currentMessages, newMessage]);
  }

	/* Side effect that runs after the component is rendered
	 * Using this to scroll the chat to the latest message
	 */
	useEffect(() => {
		dummy.current.scrollIntoView({ behavior: 'smooth' });
	});

	useEffect(() => {
		console.log("The componenet has mounted. Should only mount once");
	}, []);


	return (
		<div className="chat">
			<ChatWindow messages={messages}>
				<span ref={dummy}></span>
			</ChatWindow>
			<ChatInput
				onEnteredMessage={handleNewMessage}
			/>
		</div>
	);
}

export default Chat;
