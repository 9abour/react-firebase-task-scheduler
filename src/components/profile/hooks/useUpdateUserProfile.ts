import { FormEvent, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { db } from "../../../firebase";
import { useValidation } from "../../common/form/hooks/useValidation";
import { userProfileFormInputsData } from "../../auth/data/auth";
import { FormValuesType } from "../../../types/index.types";
import FirebaseHelpers from "../../../helpers/firebase";
import { updateUserCredentials } from "../helpers/updateUserCredentials";

const useUpdateUserProfile = (
	formValues: FormValuesType,
	userId: string,
	toggleEdit: () => void
) => {
	const { errors, validationCheck } = useValidation(userProfileFormInputsData);
	const [isLoading, setIsLoading] = useState(false);

	const handleUpdateUserProfile = async (e: FormEvent) => {
		e.preventDefault();
		const usersRef = doc(db, "users", userId);

		const isError = await validationCheck(formValues);

		if (!isError) {
			setIsLoading(true);
			await updateDoc(usersRef, {
				...formValues,
			})
				.then(async () => {
					await updateUserCredentials(formValues);
					toggleEdit();
					toast.success("your profile has been updated");
				})
				.catch(error => {
					toast.error(FirebaseHelpers.generateFirebaseErrorMessage(error));
					console.log(error.message);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	};

	return {
		handleUpdateUserProfile,
		errors,
		isLoading,
	};
};

export { useUpdateUserProfile };
