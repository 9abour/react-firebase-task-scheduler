import { DocumentData, doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../../../firebase";
import AuthContext from "../../../context/authContext";

const useFetchUserData = () => {
	const { user } = useContext(AuthContext);
	const [userData, setUserData] = useState<DocumentData | null>(null);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				if (user) {
					const userId = user.user.uid;
					const userDoc = await getDoc(doc(db, "users", userId));
					if (userDoc.exists()) {
						const user = userDoc.data();
						setUserData({ ...user, userId: userDoc.id });
					} else {
						console.log("User data not found.");
					}
				}
			} catch (error) {
				console.error("Error getting user data:", error);
			}
		};

		fetchUserData();
	}, [user]);

	return { userData };
};

export { useFetchUserData };
