// Component that renders the about text modal
function About(props) {
	// Handler that lets the passed in callback function know that
	// the exit button was clicked
	const handleExitClicked = () => {
		props.onExitClicked()
	}

	return (
		<div className='about-container'>
			<div className='about-content'>
				<div onClick={handleExitClicked} className='close-button'><a>X</a></div>
				<h1>About</h1>
				<ul>
					<li><i>Concept and Performance by Eva Pedriglieri</i></li>
					<li><i>DJ Set by Luana Pedriglieri</i></li>
					<li><i>Web Development by Jonathan Yataco</i></li>
				</ul>
				<p><i>Live Translations</i> is a collaborative art and online media project that
					music, video streaming, and performance art for a virtual audience. The
					performance piece involves instantaneous translations of song lyrics from
					Spanish, Italian, French, and some Portuguese to English. Audience members
					can view a live video feed of the performance, hear the music through their
					device, and interact with one another in the comments.<br/><br/>

					The concept behind <i>Live Translations</i> is an exploration of multilingualism
					and the interculturality imbedded in the lives of all of the artists involved.
					As multilingual, children of immigrants raised in the United States, the artists
					have had to navigate the complexities of thinking and engaging with diverse
					communities in fluid ways. We are all exchanging with many cultures seamlessly
					on the daily. Connecting the exhilarating energy of party culture with the more
					rigorous labor of producing speedy language translations, can spark conversation
					about language bridges and barriers as well as encouraging audiences to
					reevaluate their own relationship to language interpretation.
					Through a direct confrontation with what is lost and <b>gained</b>
					in translation, <i>Live Translations</i> can open the door for
					audiences and the performers to engage with one another in a new way,
					through music.<br/><br/>

					Originally planned as a live, in-person performance piece, the
					project was adapted to be digitally streamed in response to the risks
					and limitations of in-person gatherings due to Covid-19. The chat and
					live stream will expand the project's geography and allow audiences
					around the world to tune in, listen in, and engage with other
					audience members and the performers in whichever language they
					prefer! Future iterations of this digital project will allow DJ's
					around the world to connect and collaborate with individuals wanting
					to attempt their own "live translations"
				</p>
			</div>
		</div>
	);
}

export default About;
