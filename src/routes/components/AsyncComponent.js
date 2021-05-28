import { Spinner } from "@blueprintjs/core";
import { Suspense } from "react";

function AsyncComponent({ children }) {
	return <Suspense fallback={<div style={{top: "50%", left: "50%", position: "absolute", transform: "translateX(-50%)"}}><Spinner /></div>}>{children}</Suspense>;
}

export default AsyncComponent;
