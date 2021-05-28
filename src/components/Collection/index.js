import "./styles.scss";
import { useState, memo } from "react";
import { Tabs, Tab } from "@blueprintjs/core";
import { ListMusic, ListVignette, ListBreak, ListRecorded } from "../List";

function Collection() {
	const [activeTab, setActiveTab] = useState("musics");

	return (
		<div className="collection flex-column-container">
			<Tabs
				className="tabs tabs-theme-archive flex-column-container"
				defaultSelectedTabId={activeTab}
				selectedTabId={activeTab}
				id="collection-tabs"
				onChange={(navbarTabId) => setActiveTab(navbarTabId)}
			>
				<Tab
					id="musics"
					title="Músicas"
					panelClassName="panel flex-column-container"
					panel={<ListMusic />}
				/>
				<Tab
					id="vignette"
					title="Vinhetas"
					panelClassName="panel flex-column-container"
					panel={<ListVignette />}
				/>
				<Tab
					id="breaks"
					title="Breaks"
					panelClassName="panel flex-column-container"
					panel={<ListBreak />}
				/>
				<Tab
					id="recorded"
					title="Blocos Gravados"
					panelClassName="panel flex-column-container"
					panel={<ListRecorded />}
				/>
			</Tabs>
		</div>
	);
}

export default memo(Collection);
