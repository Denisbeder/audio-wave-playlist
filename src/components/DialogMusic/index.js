import { Classes, Dialog, Button, AnchorButton } from "@blueprintjs/core";
import { useSelector, useDispatch } from "react-redux";
import { Creators as actions } from "../../store/reducers/dialogs";

function DialogMusic() {
	const isOpen = useSelector((state) => state.dialogs.music.isOpen);
	const data = useSelector((state) => state.dialogs.music.data);
	const dispatch = useDispatch();

	const handleClose = () => dispatch(actions.dialogClose("music"));

	return (
		<Dialog
			icon="music"
			title="Músicas"
			isOpen={isOpen}
			canOutsideClickClose={false}
			onClose={() => handleClose()}
		>
			<div className={Classes.DIALOG_BODY + " selected"}>
				POSITION: { data?.position }
				<br />
				ID: { data?.id }
				<br />
				TITLE: { data?.title }
				<br />
				<br />
				<p>
					<strong>
						Data integration is the seminal problem of the digital
						age. For over ten years, we’ve helped the world’s
						premier organizations rise to the challenge.
					</strong>
				</p>
				<p>
					Palantir Foundry radically reimagines the way enterprises
					interact with data by amplifying and extending the power of
					data integration. With Foundry, anyone can source, fuse, and
					transform data into any shape they desire. Business analysts
					become data engineers — and leaders in their organization’s
					data revolution.
				</p>
				<p>
					Foundry’s back end includes a suite of best-in-class data
					integration capabilities: data provenance, git-style
					versioning semantics, granular access controls, branching,
					transformation authoring, and more. But these powers are not
					limited to the back-end IT shop.
				</p>
				<p>
					In Foundry, tables, applications, reports, presentations,
					and spreadsheets operate as data integrations in their own
					right. Access controls, transformation logic, and data
					quality flow from original data source to intermediate
					analysis to presentation in real time. Every end product
					created in Foundry becomes a new data source that other
					users can build upon. And the enterprise data foundation
					goes where the business drives it.
				</p>
				<p>
					Start the revolution. Unleash the power of data integration
					with Palantir Foundry.
				</p>
			</div>
			<div className={Classes.DIALOG_FOOTER}>
				<div className={Classes.DIALOG_FOOTER_ACTIONS}>
					<Button onClick={() => handleClose()}>Close</Button>

					<AnchorButton
						intent="primary"
						href="https://www.palantir.com/palantir-foundry/"
						target="_blank"
					>
						Visit the Foundry website
					</AnchorButton>
				</div>
			</div>
		</Dialog>
	);
}

export default DialogMusic;
