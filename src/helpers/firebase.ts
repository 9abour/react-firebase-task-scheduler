import { FirebaseError } from "firebase/app";

class FirebaseHelpers {
	static generateFirebaseErrorMessage = (error: FirebaseError) => {
		const errorMessage = error.message
			.split("/")[1]
			.slice(0, -2)
			.split("-")
			.join(" ");

		return errorMessage;
	};
}

export default FirebaseHelpers;
