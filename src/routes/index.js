import { lazy } from "react";
import { Route } from "react-router-dom";
import AsyncComponent from "./components/AsyncComponent";
import RedirectIfAuthenticatedRoute from "./components/RedirectIfAuthenticatedRoute";
import PrivateRoute from "./components/PrivateRoute";
import Router from "./components/Router";

// Errors
const Error404 = lazy(() => import("../pages/Errors/Error404"));

// Credentials
const Login = lazy(() => import("../pages/Login"));

// Dashboard
const Dashboard = lazy(() => import("../pages/Dashboard"));

// Programing
const Programing = lazy(() => import("../pages/Programing"));

const Routes = () => (
	<Router>
		<RedirectIfAuthenticatedRoute
			exact
			path="/login"
			component={(props) => (
				<AsyncComponent>
					<Login {...props} />
				</AsyncComponent>
			)}
		/>
		<PrivateRoute
			exact
			path="/"
			component={(props) => (
				<AsyncComponent>
					<Dashboard {...props} />
				</AsyncComponent>
			)}
		/>
		<PrivateRoute
			exact
			path="/programing"
			component={(props) => (
				<AsyncComponent>
					<Programing {...props} />
				</AsyncComponent>
			)}
		/>

		<Route
			component={(props) => (
				<AsyncComponent>
					<Error404 {...props} />
				</AsyncComponent>
			)}
		/>
	</Router>
);

export default Routes;
