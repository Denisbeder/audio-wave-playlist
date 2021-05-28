import { Icon } from "@blueprintjs/core";

function MenuItemIcon({ icon }) {
	return (
		<Icon
			icon={icon}
			iconSize={10}
			style={{ position: "relative", bottom: "-3px" }}
		/>
	);
}

export default MenuItemIcon;
