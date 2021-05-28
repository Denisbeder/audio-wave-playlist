import "./styles.scss";
import { Draggable } from "react-smooth-dnd";
import { Icon, Button, Colors } from "@blueprintjs/core";
import { PlaylistItemRightClick } from "../RightClick";
import { memo } from "react";

function PlaylistItem({ data }) {
	console.log('Render <PlaylistItem />');
	
	return (
		<Draggable className="playlist-item" key={data.id}>
			<PlaylistItemRightClick data={data}>
				<Item data={data} />
			</PlaylistItemRightClick>
		</Draggable>
	);
}

export default memo(PlaylistItem);

const Item = ({ data }) => {
	switch (data.type) {
		case "music":
			return <Music data={data} />;

		case "break":
			return <Break data={data} />;

		case "recorded":
			return <Recorded data={data} />;

		case "vignette":
			return <Vignette data={data} />;

		case "pause":
			return <Pause data={data} />;

		default:
			return null;
	}
};

const Music = ({ data }) => {
	return (
		<div className="draggable-item">
			<div className="center">{data.position}</div>
			<div className="center drag-handle">
				<Icon iconSize={12} icon="menu" />
			</div>
			<div className="space-between">
				<Button className="btn-play" icon="play" />
				<div className="fill">
					<strong>{data.title}</strong> - {data.artist}
				</div>
				<Icon
					icon="tick-circle"
					iconSize={12}
					style={{ color: Colors.LIME3 }}
				/>
			</div>
			<div className="center">03:30</div>
			<div className="center">00:03:55</div>
			<div className="center">00:03:55</div>
			<div className="center">
				<Icon icon="warning-sign" iconSize={12} intent="warning" />
			</div>
		</div>
	);
};

const Vignette = ({ data }) => {
	return (
		<div className="draggable-item">
			<div className="center">{data.position}</div>
			<div className="center drag-handle">
				<Icon iconSize={12} icon="menu" />
			</div>
			<div className="space-between">
				<Button className="btn-play" icon="play" />
				<div className="fill">
					<strong>{data.title}</strong>
				</div>
				<Icon
					icon="tick-circle"
					iconSize={12}
					style={{ color: Colors.LIME3 }}
				/>
			</div>
			<div className="center">03:30</div>
			<div className="center">00:03:55</div>
			<div className="center">00:03:55</div>
			<div className="center">
				<Icon icon="warning-sign" iconSize={12} intent="warning" />
			</div>
		</div>
	);
};

const Pause = ({ data }) => {
	return (
		<div className="draggable-item pause">
			<div className="center">{data.position}</div>
			<div className="center drag-handle">
				<Icon iconSize={12} icon="menu" />
			</div>
			<div className="center">
				<span>PAUSA</span> <span>PAUSA</span> <span>PAUSA</span>{" "}
				<span>PAUSA</span> <span>PAUSA</span> <span>PAUSA</span>{" "}
				<span>PAUSA</span>
			</div>
		</div>
	);
};

const Recorded = ({ data }) => {
	return (
		<div className="draggable-item recorded">
			<div className="center">{data.position}</div>
			<div className="center drag-handle">
				<Icon iconSize={12} icon="menu" />
			</div>
			<div className="space-between">
				<Button className="btn-play" icon="play" />
				<div className="fill">
					<strong>{data.title}</strong>
				</div>
				<Icon
					icon="tick-circle"
					iconSize={12}
					style={{ color: Colors.LIME3 }}
				/>
			</div>
			<div className="center">03:30</div>
			<div className="center">00:03:55</div>
			<div className="center">00:03:55</div>
			<div className="center">
				<Icon icon="warning-sign" iconSize={12} intent="warning" />
			</div>
		</div>
	);
};

const Break = ({ data }) => {
	return (
		<div className="draggable-item break">
			<div className="center">{data.position}</div>
			<div className="center drag-handle">
				<Icon iconSize={12} icon="menu" />
			</div>
			<div className="space-between">
				<Button className="btn-play" icon="play" />
				<div className="fill">
					<strong>{data.title}</strong>
				</div>
				<Icon
					icon="tick-circle"
					iconSize={12}
					style={{ color: Colors.LIME3 }}
				/>
			</div>
			<div className="center">03:30</div>
			<div className="center">00:03:55</div>
			<div className="center">00:03:55</div>
			<div className="center">
				<Icon icon="warning-sign" iconSize={12} intent="warning" />
			</div>
		</div>
	);
};
