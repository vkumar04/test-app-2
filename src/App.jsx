import React from "react";
import ReactDOM from "react-dom";

const Header = React.lazy(() => import('header/Header'))

import "./index.css";

const App = () => <Header />;

ReactDOM.render(<App />, document.getElementById("app"));
