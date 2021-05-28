import "./styles.scss";
import Collection from "../Collection";
import PlaylistTrack from "../PlaylistTrack";

function Playlist() {
	console.log('Render <Playlist />');
	return (
		<div className="playlist">
			<div className="droppable">
				<PlaylistTrack />
			</div>

			<div className="draggable">
				<Collection />
			</div>
		</div>
	);
}

export default Playlist;
