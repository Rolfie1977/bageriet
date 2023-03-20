import { Navbar } from "./components/navbar";
import "./App.css";
import { News } from "./components/news";
import Hero from "./components/hero";
import { Nyhedsbrev } from "./components/nyhedsbrev";

function App() {
	return (
		<>
			<Navbar />

			<Hero />

			<News />
			<Nyhedsbrev />
		</>
	);
}

export default App;
