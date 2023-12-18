import Body from "./card-body";
import CardTitle from "./card-title";
import { Character } from "../../public/fma-data";
import "./character-cards.css";
function Card({ imageUrl, name, nickName, background }: Character) {
	return (
		<div className="card">
			<CardTitle imageUrl={imageUrl} name={name} nickName={nickName} />
			<Body background={background} />
		</div>
	);
}

export default Card;
