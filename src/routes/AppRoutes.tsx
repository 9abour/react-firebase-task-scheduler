import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import LandingPage from "../components/landing-page/LandingPage";
import EditTask from "../components/task/components/EditTask";
import Navbar from "../components/navbar/Navbar";
import { useContext } from "react";
import AuthContext from "../context/authContext";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import Dashboard from "../components/dashboard/Dashboard";
import Profile from "../components/profile/Profile";

function AppRoutes() {
	const { user } = useContext(AuthContext);

	const redirectToDashboard = () => <Navigate to="/dashboard" replace />;
	const redirectToLogin = () => <Navigate to="/login" replace />;

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={user ? redirectToDashboard() : <LandingPage />}
				/>
				<Route
					path="/dashboard"
					element={user ? <Dashboard /> : redirectToLogin()}
				/>
				<Route
					path="/dashboard/edit-task/:taskId"
					element={user ? <EditTask /> : redirectToLogin()}
				/>
				<Route
					path="/login"
					element={user ? redirectToDashboard() : <Login />}
				/>
				<Route
					path="/register"
					element={user ? redirectToDashboard() : <Register />}
				/>
				<Route
					path="/profile"
					element={!user ? redirectToLogin() : <Profile />}
				/>
				<Route
					path="*"
					element={
						<>
							<h1>Not found page</h1>
						</>
					}
				/>
			</Routes>
		</Router>
	);
}

export default AppRoutes;
