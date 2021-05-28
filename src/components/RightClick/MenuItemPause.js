import { MenuItem } from "@blueprintjs/core";
import MenuItemIcon from "./MenuItemIcon";

function MenuItemPause({ data }) {
	return (
		<>
			<MenuItem
				text="Inserir PAUSA acima"
				icon={<MenuItemIcon icon="arrow-up" />}
			/>
			<MenuItem
				text="Inserir PAUSA abaixo"
				icon={<MenuItemIcon icon="arrow-down" />}
			/>
		</>
	);
}

export default MenuItemPause;
