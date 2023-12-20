import { Character } from "../../public/fma-data";
import "./character-cards.css";

function Card({ character }: { character: Character }) {
	return (
		<div className="card">
			<div>
				<div className="card-titles">
					<h3>{character.name}</h3>
					<h4>{character.nickName}</h4>
				</div>
				<img src={character.imageUrl} alt={character.name}></img>
			</div>
			<p>{character.background}</p>;
		</div>
	);
}

export default Card;
