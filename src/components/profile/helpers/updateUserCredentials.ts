import { updateEmail, updatePassword } from "firebase/auth";
import { auth } from "../../../firebase";

const updateUserCredentials = async ({
	newEmail,
	newPassword,
}: Record<string, string>) => {
	const user = auth.currentUser;

	if (user) {
		await updateEmail(user, newEmail);
		await updatePassword(user, newPassword);
	}
};

export { updateUserCredentials };
