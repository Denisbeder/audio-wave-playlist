import { Menu } from "@blueprintjs/core";
import { ContextMenu2 } from "@blueprintjs/popover2";
import MenuItemSave from "./MenuItemSave";
import MenuItemInsert from "./MenuItemInsert";
import MenuItemPauseEnd from "./MenuItemPauseEnd";
import { memo } from "react";

function PlaylistRightClick({ children, data }) {
	console.log("Render <PlaylistRightClick />");

	return (
		<ContextMenu2
			className="flex-column-container"
			content={
				<Menu>
					<MenuItemSave data={data} />
					<MenuItemInsert data={data} />
					<MenuItemPauseEnd data={data} />
				</Menu>
			}
		>
			{children}
		</ContextMenu2>
	);
}

export default memo(PlaylistRightClick);
