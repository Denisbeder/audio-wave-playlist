import { useSelector, useDispatch } from "react-redux";
import { Creators as actions } from "../../store/reducers/programing";
import { DateInput } from "@blueprintjs/datetime";
import { Icon, Position } from "@blueprintjs/core";
import { memo } from "react";

function PlaylistDateSelect() {
	console.log("Render <PlaylistDateSelect />");

	const dispatch = useDispatch();

	const dateSelected = useSelector(
		({ programing }) => programing.date_selected
	);

	const handleSelectDate = (date, isUserChange) => {
		if (isUserChange) {
			dispatch(actions.selectDate(date));
		}
	};

	return (
		<DateInput
			className="date-input"
			canClearSelection={false}
			onChange={(date, isUserChange) =>
				handleSelectDate(date, isUserChange)
			}
			loacale="pt-br"
			defaultValue={dateSelected}
			inputProps={{ round: true, large: true }}
			popoverProps={{ position: Position.BOTTOM, minimal: false }}
			rightElement={<Icon icon="calendar" className="date-input-icon" />}
			formatDate={(date) => date.toLocaleDateString()}
			parseDate={(str) => new Date(str)}
			placeholder="MM/DD/YYYY"
			value={null}
		/>
	);
}

export default memo(PlaylistDateSelect);
