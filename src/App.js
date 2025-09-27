import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import PWAInstallButton from "./components/PWAIntsallButton/PWAInstallButton";

function App() {
	const [selectedPage, setSelectedPage] = useState([<About />, "About"]);
	{
		document.title = selectedPage[1];
	}

	return (
		<div className="App">
			<header className="App-header">
				<div className="header-content">
					<h1>My Portfolio</h1>
					<PWAInstallButton />
				</div>
				<Nav selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			</header>
			{selectedPage[0]}

			<footer className="App-footer">
				<a href="https://github.com/Ortaylo">
					<img
						className="footer-img"
						src={require(`./assets/images/Github.png`)}
						alt={"Github profile link"}
						key={"Github link"}
					/>
				</a>
				<a href="https://www.linkedin.com/in/owen-taylor-4904a8231/">
					<img
						className="footer-img"
						src={require(`./assets/images/LinkedIn.png`)}
						alt={"Linked In profile link"}
						key={"LinkedIn link"}
					/>
				</a>
				<a href="https://stackoverflow.com/users/18173590/ortaylo">
					<img
						className="footer-img"
						src={require(`./assets/images/Stack-overflow.png`)}
						alt={"Stack Overflow profile link"}
						key={"stackoverflow link"}
					/>
				</a>
			</footer>
		</div>
	);
}

export default App;
