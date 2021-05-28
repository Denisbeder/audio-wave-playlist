import "./styles.scss";
import PlaylistDroppable from "../PlaylistDroppable";
import PlaylistTopBar from "../PlaylistTopBar/PlaylistTopBar";
import { memo } from "react";

function PlaylistTrack() {
	console.log("Render <PlaylistTrack />");

	return (
		<div className="playlist-track flex-column-container">
			<PlaylistTopBar />

			<div className="header-item">
				<div>Pos</div>
				<div> </div>
				<div>Mídia</div>
				<div>Duração</div>
				<div>Inícia ás</div>
				<div>Encerra ás</div>
				<div> </div>
			</div>

			<PlaylistDroppable />
		</div>
	);
}

export default memo(PlaylistTrack);
