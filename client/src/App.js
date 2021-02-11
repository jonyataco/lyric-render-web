import './App.css';
import Nav from './Nav.js';
import BackgroundVideo from './assets/video.mp4';
import HeaderLogo from './assets/logo.svg';
import Chat from './Chat.js'
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
			<video autoPlay muted loop className="background-video">
				<source src={BackgroundVideo} type="video/mp4"/>
			</video>
			<img src={HeaderLogo} alt="Live translations logo" className="logo"/>
			<Nav />
			<div className="video-player-container">
				<ReactPlayer
					className="video-player"
					url='https://www.youtube.com/watch?v=UT5CrzGpDoQ'
					width='100%'
					height='100%'
					controls={true}
				/>
			</div>
			<Chat />
    </div>
  );
}

export default App;
