import "./styles.scss";
import { Container } from "react-smooth-dnd";
import { NonIdealState } from "@blueprintjs/core";
import { PlaylistRightClick } from "../RightClick";
import { useSelector, useDispatch } from "react-redux";
import { Creators as actions } from "../../store/reducers/programing";
import { isEmpty } from "lodash";
import { memo } from "react";
import PlaylistItem from "../PlaylistItem";

function PlaylistDroppable() {
	console.log("Render <PlaylistDroppable />");

	const dispatch = useDispatch();
	const hourSelected = useSelector(
		({ programing }) => programing.hour_selected
	);
	const dateSelected = useSelector(
		({ programing }) => programing.date_selected
	);
	const items = useSelector(({ programing }) => programing.items);

	const handleDragItem = (dropResult) =>
		dispatch(actions.dragItem(dropResult));

	return (
		<PlaylistRightClick>
			<div className="playlist-dropplable scrollable">
				<Container
					lockAxis="y"
					groupName="playlist"
					dragClass="dragging-handle"
					dropClass="drop-handle"
					dragHandleSelector=".drag-handle"
					getChildPayload={(i) => items[hourSelected][i]}
					onDrop={(dropResult) => handleDragItem(dropResult)}
					style={{width: "100%", minHeight: "100%"}}
				>
					{isEmpty(items[hourSelected]) ? (
						<Empty
							hourSelected={hourSelected}
							dateSelected={dateSelected}
						/>
					) : (
						items[hourSelected].map((data, i) => {
							return (
								<PlaylistItem
									key={i}
									data={{ ...data, position: i + 1 }}
								/>
							);
						})
					)}
				</Container>
			</div>
		</PlaylistRightClick>
	);
}

const Empty = ({ hourSelected, dateSelected }) => {
	console.log("Render <Empty />");
	return (
		<NonIdealState
			className="non-ideal-state-playlist disable-animation"
			icon="inbox"
			title="Sem programação"
			description={`Não existe uma programação para a hora ${hourSelected} do dia ${dateSelected}`}
		/>
	);
};

export default memo(PlaylistDroppable);
