import { MenuItem } from "@blueprintjs/core";
import MenuItemIcon from "./MenuItemIcon";

function MenuItemPauseEnd({ data }) {
	return (
		<MenuItem
			text="Inserir PAUSA"
			icon={<MenuItemIcon icon="pause" />}
		/>
	);
}

export default MenuItemPauseEnd;
