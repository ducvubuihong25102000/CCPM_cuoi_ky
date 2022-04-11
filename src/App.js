import { BrowserRouter, Route, Switch } from "react-router-dom";

import Chart from "./Template/Chart";
import Home from "./Template/Home/Home"
// import Login from "./components/Login1/Login";//
import AdminPage from "./components/Admin/Dashboard/Dashboard";
import AdminScreen from "./Template/Admin";
import Login from "./components/Admin/Login/Login";
import Admin from "./Template/Admin";


function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Home exact path="/home" Component={Chart} />
				<Home exact path="/" Component={Chart} />
				<Route exact path="/login" Component={Login} />
				<AdminScreen exact path="/admin/dashboard" Component={AdminPage} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
