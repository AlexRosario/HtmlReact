import "./character-ratings.css";
import { Character } from "../../public/fma-data";
import { data } from "../../public/fma-data";
import TopCharacters from "./top-characters";

function Table({ name, skillset, votes }: Character) {
	return (
		<>
			<h4>Top Characters</h4>
			<table>
				<tbody>
					<TopCharacters />
				</tbody>
			</table>
		</>
	);
}

export default Table;
