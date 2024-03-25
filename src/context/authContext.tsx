import { createContext, useEffect, useState } from "react";
import { ChildrenType } from "../types/index.types";
import { UserCredential } from "firebase/auth";

type AuthContext = {
	user: null | UserCredential;
	setUser: (user: UserCredential) => void;
};

const initialAuthValue: AuthContext = {
	user: null,
	setUser: () => {},
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

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthProvider };
export default AuthContext;
