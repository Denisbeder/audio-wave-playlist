import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";

function RedirectIfAuthenticatedRoute({ component: Component, ...rest }) {
	const handleRender = (props) => {
		return !isAuthenticated() ? (
			<Component {...props} />
		) : (
			<Redirect
				to={{ pathname: "/dashboard", state: { from: props.location } }}
			/>
		);
	};

	return <Route {...rest} render={(props) => handleRender(props)} />;
}

export default RedirectIfAuthenticatedRoute;
