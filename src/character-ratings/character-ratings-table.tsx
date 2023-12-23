import "./character-ratings.css";
import { Character } from "../../public/fma-data";

function Table({ characters }: { characters: Character[] }) {
	const topCharacters = characters
		.toSorted((a, b) => b.votes - a.votes)
		.slice(0, 5);

	return (
		<>
			<h4>Top Characters</h4>
			<table>
				<tbody>
					<tr>
						<th>Name</th>
						<th>Skillset</th>
						<th>Votes</th>
					</tr>
					{topCharacters.map((character, index: number) => (
						<tr className={index % 2 == 0 ? "dark" : "light"}>
							<td>{character.name}</td>
							<td>{character.skillset.join(", ")}</td>
							<td>{character.votes}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

export default Table;
