import "./styles.scss";
import { Icon, Button } from "@blueprintjs/core";
import { memo } from "react";
import PlaylistDateSelect from "./PlaylistDateSelect";
import PlaylistHoursTabs from "./PlaylistHoursTabs";

function PlaylistTopBar() {
    console.log("Render <PlaylistTopBar />");  
	
	return (
		<div className="playlist-buttons">
			<Button
				className="btn-circle"
				icon={
					<Icon
						icon="cog"
						className="btn-circle-icon"
						iconSize={16}
					/>
				}
			/>
			<PlaylistDateSelect />
			<PlaylistHoursTabs />
		</div>
	);
}

export default memo(PlaylistTopBar);
