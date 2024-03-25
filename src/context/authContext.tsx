import { createContext, useEffect, useState } from "react";
import { ChildrenType } from "../types/index.types";
import { UserCredential } from "firebase/auth";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

type AuthContext = {
	user: null | UserCredential;
	userInfo: DocumentData | null;
	setUser: (user: UserCredential) => void;
	logout: () => void;
};

const initialAuthValue: AuthContext = {
	user: null,
	userInfo: null,
	setUser: () => {},
	logout: () => {},
};

const AuthContext = createContext(initialAuthValue);

const AuthProvider = ({ children }: ChildrenType) => {
	const storedUser = localStorage.getItem("user");
	const [userInfo, setUserInfo] = useState<DocumentData | null>(null);

	const [user, setUser] = useState<UserCredential | null>(
		storedUser ? JSON.parse(storedUser) : null
	);

	useEffect(() => {
		if (storedUser) {
			const storedUserObj = JSON.parse(storedUser);
			setUser(storedUserObj);
			getUserInfo();
		}
	}, []);

	const logout = () => {
		setUser(null);
		localStorage.removeItem("user");
	};

	const getUserInfo = async () => {
		if (user) {
			const userDocRef = doc(db, "users", user.user.uid);

			const userInfoDoc = await getDoc(userDocRef);
			const userInfo = userInfoDoc.data();

			if (userInfo) {
				setUserInfo(userInfo);
			}
		}
	};

	return (
		<AuthContext.Provider value={{ user, userInfo, setUser, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthProvider };
export default AuthContext;
