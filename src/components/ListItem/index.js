import "./styles.scss";
import { Button } from "@blueprintjs/core";
import { memo } from "react";

function ListItem({title, duration, artist}) {
	console.log("Render <ListItem />");
	return (
		<div className="list-item">
			<Button className="btn-play" icon="play" /> 
			<div className="text">
				<span>{title} <small>{duration}</small></span>
				<small>{artist}</small>
			</div>
		</div>
	);
}

export default memo(ListItem);
