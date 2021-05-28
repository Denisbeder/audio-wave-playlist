import "./styles.scss";
import NavbarTop from "./../NavbarTop";
import DialogMusic from "../DialogMusic";
import { memo } from "react";

function App({ children }) {
	console.log('Render <App />');
	return (
		<div className="app">
			<NavbarTop />
			<div className="app-content">{children}</div>
			<DialogMusic />
		</div>
	);
}

export default memo(App);
