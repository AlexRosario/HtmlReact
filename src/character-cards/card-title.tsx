import * as React from "react";
import { Character } from "../../public/fma-data";
import "./character-cards.css";

function CardTitle(props: Character) {
	return (
		<div>
			<div className="card-titles">
				<h3>{props.name}</h3>
				<h4>{props.nickName}</h4>
			</div>
			<img src={props.imageUrl} alt={props.name}></img>
		</div>
	);
}

export default CardTitle;
