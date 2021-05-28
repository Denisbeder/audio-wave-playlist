import { MenuItem } from "@blueprintjs/core";
import MenuItemIcon from "./MenuItemIcon";
import { useDispatch } from "react-redux";
import { Creators as actions } from "../../store/reducers/dialogs";


function MenuItemInsert({ data }) {
	const dispatch = useDispatch();

	const handleOpenDialog = (dialog) => dispatch(actions.dialogOpen(dialog, data));

	return (
		<MenuItem text="Inserir" icon={<MenuItemIcon icon="insert" />}>
			<MenuItem
				text="Música"
				icon={<MenuItemIcon icon="music" />}
				onClick={() => handleOpenDialog("music")}
			/>
			<MenuItem
				text="Vinheta"
				icon={<MenuItemIcon icon="music" />}
				onClick={() => console.log("ABIR DIALOG Vinheta")}
			/>
			<MenuItem
				text="Break"
				icon={<MenuItemIcon icon="music" />}
				onClick={() => console.log("ABIR DIALOG Break")}
			/>
			<MenuItem
				text="Bloco Gravado"
				icon={<MenuItemIcon icon="music" />}
				onClick={() => console.log("ABIR DIALOG Gravado")}
			/>
		</MenuItem>
	);
}

export default MenuItemInsert;
