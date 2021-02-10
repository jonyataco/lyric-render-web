import { useEffect, useRef, useState } from 'react';
import ChatWindow from './ChatWindow.js';
import { io } from 'socket.io-client';
import TextareaAutosize from 'react-textarea-autosize';
const ENDPOINT = "http://localhost:5000";

function Chat() {
	// Dummy that is used to scroll the view into place when a new message is added
	const dummy = useRef();

	// The state of the current chat and all of its messages
  const [messages, setMessages] = useState([]);

	// The current message. Message is an object that has a sender and a message
	const [currentMessage, setCurrentMessage] = useState({sender: "", message: ""});

  const handleNewMessage = e => {
		const newMessage = {sender: currentMessage.sender, message: currentMessage.message};

		// Checks if the enter key was pressed and both input boxes are not empty
		if (e.key === 'Enter' && newMessage.sender !== "" && newMessage.message !== "") {
			e.preventDefault()
			setCurrentMessage({...currentMessage, ["message"]: ""});
			setMessages(currentMessages => [...currentMessages, newMessage]);
		}
  }

	const handleTextChange = e => {
		setCurrentMessage({...currentMessage, [e.target.name]: e.target.value});
	}

	/* Side effect that runs after the component is rendered
	 * Using this to scroll the chat to the latest message
	 */
	useEffect(() => {
		dummy.current.scrollIntoView({ behavior: 'smooth' });
	});

	/*
	useEffect(() => {
		console.log("The componenet has mounted. Should only mount once");
		fetch("http://localhost:5000/")
			.then(data => console.log(data));
		const socket = io(ENDPOINT);
	}, []);
	*/

	return (
		<div className="chat">
			<ChatWindow messages={messages}>
				<span ref={dummy}></span>
			</ChatWindow>
			<div className="input-boxes">
				<TextareaAutosize
					name="sender"
					className="name-input"
					placeholder="Enter a name to comment"
					value={currentMessage.sender}
					minRows={1}
					maxRows={1}
					onKeyDown={handleNewMessage}
					onChange={handleTextChange}
				/>
				<TextareaAutosize
					name="message"
					className="chat-input"
					placeholder="Enter a message"
					value={currentMessage.message}
					minRows={1}
					maxRows={2}
					onKeyDown={handleNewMessage}
					onChange={handleTextChange}
				/>
			</div>
		</div>
	);
}

export default Chat;
