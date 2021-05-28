import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";
import App from "../../components/App";

function PrivateRoute({ component: Component, ...rest }) {
	const handleRender = (props) => {
		return isAuthenticated() ? (
			<App>
				<Component {...props} />
			</App>
		) : (
			<Redirect to={{ pathname: "/login", state: { from: props.location } }} />
		);
	};

	return <Route {...rest} render={(props) => handleRender(props)} />;
}

export default PrivateRoute;
