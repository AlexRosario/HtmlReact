import { data } from "../public/fma-data";
import Card from "./character-cards/card";
import "./App.css";
import Header from "./header/header";
import Table from "./character-ratings/character-ratings-table";

function App() {
	return (
		<>
			<Header />
			<section id="character-ratings">
				<Table characters={data} />
			</section>
			<section id="character-cards">
				{data.map((character) => (
					<Card key={character.name} character={character} />
				))}
			</section>
		</>
	);
}

export default App;
