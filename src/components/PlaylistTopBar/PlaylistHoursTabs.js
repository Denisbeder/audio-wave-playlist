import "./styles.scss";
import { Tabs, Tab } from "@blueprintjs/core";
import { memo } from "react";
import { padStart } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { Creators as actions } from "../../store/reducers/programing";

function PlaylistHoursTabs() {
	console.log("Render <PlaylistHoursTabs />");

	const dispatch = useDispatch();
	const hourSelected = useSelector(({ programing }) => programing.hour_selected);
	const hours = Array.from(Array(24).keys()).map((v) => padStart(v, 2, "0"));

	const handleSelectHour = (hour) => dispatch(actions.selectHour(hour));

	return (
		<Tabs
			className="tabs-theme-circle tabs"
			data-label="Horários do dia 20258"
			defaultSelectedTabId={hourSelected}
			selectedTabId={hourSelected}
			id="playlist-tabs"
			onChange={(navbarTabId) => handleSelectHour(navbarTabId)}
		>
			{hours.map((hour) => (
				<Tab key={hour} id={hour} title={hour} />
			))}
		</Tabs>
	);
}

export default memo(PlaylistHoursTabs);
