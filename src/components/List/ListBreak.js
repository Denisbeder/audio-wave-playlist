import "./styles.scss";
import { useState, memo } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { applyDrag, generateItems } from "../../utils";
import {
	ControlGroup,
	Button,
	InputGroup,
	HTMLSelect,
	Icon,
} from "@blueprintjs/core";
import ListItem from "../ListItem";

const FILTER_OPTIONS = ["Em tudo", "Cliente", "Contrato", "Título"];

function ListBreak() {
	console.log("Render <ListBreak />");
	
	const [items, setItems] = useState(
		generateItems(50, (i) => ({
			id: i,
			type: "break",
			customer: `Cliente Nome ${i}`,
			title: `Nome do BREAK qualquer ${i}`,
			duration: "03:20",
		}))
	);

	return (
		<div className="list flex-column-container">
			<ControlGroup className="filter" fill={true} vertical={false}>
				<HTMLSelect minimal={true} options={FILTER_OPTIONS} />
				<InputGroup placeholder="Digite e clique na lupa" fill={true} />
				<Button
					minimal={true}
					icon={<Icon icon="search" iconSize={12} />}
				/>
			</ControlGroup>

			<div className="scrollable">
				<Container
					groupName="playlist"
					dragClass="dragging-handle"
					dropClass="drop-handle"
					behaviour="copy"
					getChildPayload={(i) => items[i]}
					onDrop={(e) => setItems(applyDrag(items, e))}
				>
					{items.map((p, i) => {
						return (
							<Draggable key={i}>
								<div className="draggable-item">
									<ListItem title={p.title} artist={p.artist} duration={p.duration} />
								</div>
							</Draggable>
						);
					})}
				</Container>
			</div>
		</div>
	);
}

export default memo(ListBreak);
