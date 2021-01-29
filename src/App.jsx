import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom";

const Header = lazy(() => import('header/Header'))

import "./index.css";

const App = () => <Suspense fallback={<div>Loading...</div>}>
<Header />
</Suspense>;

ReactDOM.render(<App />, document.getElementById("app"));
