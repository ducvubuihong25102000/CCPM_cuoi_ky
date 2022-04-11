import { BrowserRouter, Route, Switch } from "react-router-dom";

import Chart from "./Template/Chart";
import Home from "./Template/Home/Home"
// import Login from "./components/Login1/Login";//



function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Home exact path="/home" Component={Chart} />
				<Home exact path="/" Component={Chart} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
