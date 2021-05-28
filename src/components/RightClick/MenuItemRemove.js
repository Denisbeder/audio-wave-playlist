import { MenuItem } from "@blueprintjs/core";
import MenuItemIcon from "./MenuItemIcon";

function MenuItemRemove({ data }) {
	return (
		<MenuItem
			text="Remover"
			icon={<MenuItemIcon icon="trash" />}
			intent="danger"
			onClick={() => console.log(data)}
		/>
	);
}

export default MenuItemRemove;
