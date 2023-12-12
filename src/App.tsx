import * as React from "react";
import { data } from "../public/fma-data";
import { Character } from "../public/fma-data";
import Card from "./character-cards/card";
import "./App.css";
import Header from "./header/header";
import Table from "./character-ratings/character-ratings-table";

function App() {
	return (
		<>
			<Header />
			<section id="character-ratings">
				<Table />
			</section>
			<section id="character-cards">
				{data.map((character: Character) => (
					<Card
						key={character.name}
						imageUrl={character.imageUrl}
						name={character.name}
						nickName={character.nickName}
						background={character.background}
					/>
				))}
			</section>
		</>
	);
}

export default App;
