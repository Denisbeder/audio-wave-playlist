import { Menu, MenuDivider } from "@blueprintjs/core";
import { ContextMenu2 } from "@blueprintjs/popover2";
import MenuItemInsert from "./MenuItemInsert";
import MenuItemPause from "./MenuItemPause";
import MenuItemRemove from "./MenuItemRemove";
import MenuItemSave from "./MenuItemSave";
import { memo } from "react";

function PlaylistItemRightClick({ children, data }) {
	console.log("Render <PlaylistItemRightClick />");

	return (
		<ContextMenu2
			content={
				<Menu>					
					<MenuItemSave data={data} />
					<MenuItemInsert data={data} />
					<MenuDivider />
					<MenuItemPause data={data} />
					<MenuItemRemove data={data} />
				</Menu>
			}
		>
			{children}
		</ContextMenu2>
	);
}

export default memo(PlaylistItemRightClick);
