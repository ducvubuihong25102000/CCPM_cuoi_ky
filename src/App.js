import { BrowserRouter, Route, Switch } from "react-router-dom";

import Chart from "./Template/Chart";
import Home from "./Template/Home/Home"
// import Login from "./components/Login1/Login";//
import AdminPage from "./components/Admin/Dashboard";
import AdminScreen from "./components/Admin/Login";




function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Home exact path="/home" Component={Chart} />
				<Home exact path="/" Component={Chart} />
				<AdminPage exact path ="/admin/dashboard" Component = {AdminPage}/>
				<Route exact path="/login" Component={Login}/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
