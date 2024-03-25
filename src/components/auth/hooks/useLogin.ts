import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import AuthContext from "../../../context/authContext";
import { useContext } from "react";
import toast from "react-hot-toast";
import FirebaseHelpers from "../../../helpers/firebase";

const useLogin = () => {
	const { setUser } = useContext(AuthContext);
	const login = async (email: string, password: string) => {
		await signInWithEmailAndPassword(auth, email, password)
			.then(user => {
				localStorage.setItem("user", JSON.stringify(user));
				toast.success("Welcome back");
				setUser(user);
			})
			.catch(error => {
				toast.error(FirebaseHelpers.generateFirebaseErrorMessage(error));
				console.log(error.message);
			});
	};

	return { login };
};

export { useLogin };
