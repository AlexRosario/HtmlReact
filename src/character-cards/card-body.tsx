import "./character-cards.css";
import { Character } from "../../public/fma-data";

function Body(props: Character) {
	return <p>{props.background}</p>;
}

export default Body;
