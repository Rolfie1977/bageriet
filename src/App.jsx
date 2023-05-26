import { Navbar } from "./components/navbar";
import "./App.css";
import { News } from "./components/news";
import Hero from "./components/hero";
import { Nyhedsbrev } from "./components/nyhedsbrev";
import { Products } from "./components/products";

function App() {
	return (
		<>
			<Navbar />

			<Hero />

			<News />
			<Nyhedsbrev />
			<Products />
		</>
	);
}

export default App;
