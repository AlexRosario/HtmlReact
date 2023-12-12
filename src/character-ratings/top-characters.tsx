import { Character } from "../../public/fma-data";
import { data } from "../../public/fma-data";

const topCharacters = data
	.filter((character) => character.votes >= 0)
	.sort((a, b) => b.votes - a.votes)
	.slice(0, 5);

function TopCharacters() {
	return (
		<>
			<tr>
				<th>Name</th>
				<th>Skillset</th>
				<th>Votes</th>
			</tr>
			{topCharacters.map((character: Character, index: number) => (
				<tr className={index % 2 == 0 ? "dark" : "light"}>
					<td>{character.name}</td>
					<td>{character.skillset.join(", ")}</td>
					<td>{character.votes}</td>
				</tr>
			))}
		</>
	);
}

export default TopCharacters;
