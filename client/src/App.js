import './App.css';
import Nav from './Nav.js';
import BackgroundVideo from './assets/video.mp4';
import HeaderLogo from './assets/logo.svg';

function App() {
  return (
    <div className="App">
			<video autoPlay muted loop className="background-video">
				<source src={BackgroundVideo} type="video/mp4"/>
			</video>
			<img src={HeaderLogo} alt="Live translations logo" className="logo"/>
			<Nav />
    </div>
  );
}

export default App;
