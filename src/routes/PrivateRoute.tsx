import React, { ReactNode, useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import AuthContext from "../context/authContext";

interface ProtectedRouteProps {
	children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
	children,
	...rest
}) => {
	const { user } = useContext(AuthContext);

	return user ? (
		<Route {...rest}>{children}</Route>
	) : (
		<Navigate to="/" replace />
	);
};

export default ProtectedRoute;
