import { Alert } from "@blueprintjs/core";
import { useSelector, useDispatch } from "react-redux";
import { Creators as actions } from "../../store/reducers/dialogs";

function AlertDelete() {
	const isOpen = useSelector((state) => state.dialogs.music.isOpen);
	const data = useSelector((state) => state.dialogs.music.data);
	const dispatch = useDispatch();

	const handleCancel = () => dispatch(actions.dialogClose("music"));

	return (
		<Alert
			cancelButtonText="Cancel"
			confirmButtonText="Move to Trash"
			icon="trash"
			intent="danger"
			isOpen={isOpen}
			loading={isLoading}
			onCancel={() => {}}
			onConfirm={() => {}}
		>
			<p>
				Are you sure you want to move <b>filename</b> to Trash? You will
				be able to restore it later, but it will become private to you.
			</p>
		</Alert>
	);
}

export default AlertDelete;
