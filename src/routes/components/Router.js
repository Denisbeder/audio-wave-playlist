import { BrowserRouter, Switch } from "react-router-dom";

function Router({ children }) {
	return (
		<BrowserRouter>
			<Switch> {children}</Switch>
		</BrowserRouter>
	);
}

export default Router;
