import { Route, Router, Routes } from "@solidjs/router";
import { lazy } from "solid-js";

const Explorer = lazy(() => import("./pages/explorer"));

export default function Root() {
	return (
		<Router>
			<Routes>
				<Route path="/" component={Explorer} />
			</Routes>
		</Router>
	);
}
