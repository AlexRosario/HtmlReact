import "./character-ratings.css";
import TopCharacters from "./top-characters";

function Table() {
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
