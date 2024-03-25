import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { FirebaseError } from "firebase/app";
import FirebaseHelpers from "../../../helpers/firebase";

const useRegister = () => {
	const register = async (formValues: Record<string, string>) => {
		const { firstName, lastName, email, password } = formValues;

		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);

			setDoc(doc(db, "users", res.user.uid), {
				firstName,
				lastName,
				email,
				password,
				tasks: [],
			});

			toast.success("Registered successfully.");
		} catch (error) {
			if (error instanceof FirebaseError) {
				toast.error(FirebaseHelpers.generateFirebaseErrorMessage(error));
			} else {
				toast.error("An unexpected error occurred.");
			}
		}
	};

	return { register };
};

export { useRegister };
