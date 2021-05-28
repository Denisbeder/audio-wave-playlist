import { MenuItem } from "@blueprintjs/core";
import MenuItemIcon from "./MenuItemIcon";

function MenuItemRemove({ data }) {
	return (
		<MenuItem
			text="Salvar Programação"
			label="(Ctrl + S)"
			icon={<MenuItemIcon icon="floppy-disk" />}
		/>
	);
}

export default MenuItemRemove;
