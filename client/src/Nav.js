import { useState } from 'react';
import About from './About.js';

function Nav() {
	const [aboutClicked, setAboutClicked] = useState(false);

	// Event handler that toggles the state
	const handleClick = () => {
		setAboutClicked(!aboutClicked);
	}

	return (
		<div>
			<nav>
				<ul className="nav-container">
					<li onClick={handleClick}><a>About</a></li>
					<li><a>Support</a></li>
				</ul>
			</nav>
			{aboutClicked &&
				<About
					onExitClicked={handleClick}
				/>
			}
			<h1 className="date-title">June, 2021 | Fort Lauderdale, Florida</h1>
		</div>
	);
}

export default Nav;
