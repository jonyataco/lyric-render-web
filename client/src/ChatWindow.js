/***
 * Chat window that has two different props
 * messages - An array of strings
 * children - N amount of children components. Used to pass the span div
 */
function ChatWindow(props) {

	const chatMessages = props.messages.map(({sender, message}, index) =>
		<div className="message" key={index}>
			<p className="sender"><b>{sender}</b>: </p>
			<p>{message}</p>
		</div>
	);


	return (
		<div className="chat-window">
			{chatMessages}
			{props.children}
		</div>
	);
}

export default ChatWindow;
