import { createContext, useEffect, useState } from "react";
import { ChildrenType } from "../types/index.types";
import { UserCredential } from "firebase/auth";

type AuthContext = {
	user: null | UserCredential;
	setUser: (user: UserCredential) => void;
	logout: () => void;
};

const initialAuthValue: AuthContext = {
	user: null,
	setUser: () => {},
	logout: () => {},
};

const AuthContext = createContext(initialAuthValue);

const AuthProvider = ({ children }: ChildrenType) => {
	const storedUser = localStorage.getItem("user");

	const [user, setUser] = useState<UserCredential | null>(
		storedUser ? JSON.parse(storedUser) : null
	);

	useEffect(() => {
		if (storedUser) {
			const storedUserObj = JSON.parse(storedUser);
			setUser(storedUserObj);
		}
	}, []);

	const logout = () => {
		setUser(null);
		localStorage.removeItem("user");
	};

	return (
		<AuthContext.Provider value={{ user, setUser, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthProvider };
export default AuthContext;
