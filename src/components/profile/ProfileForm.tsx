import useToggle from "../../hooks/click-handlers/useToggle";
import { userProfileFormInputsData } from "../auth/data/auth";
import TextButton from "../common/button/components/TextButton";
import Input from "../common/form/components/Input";
import useHandleFormInputChange from "../common/form/hooks/useHandleFormInputChange";
import EditButton from "./EditButton";
import { useUpdateUserProfile } from "./hooks/useUpdateUserProfile";

const ProfileForm = ({ userData }: { userData: Record<string, string> }) => {
	const { currentState: isEdit, toggle: toggleEdit } = useToggle(false);
	const { formValues, onFormValueChange } = useHandleFormInputChange();

	const { errors, handleUpdateUserProfile, isLoading } = useUpdateUserProfile(
		formValues,
		userData.userId,
		toggleEdit
	);

	return (
		<div className="w-full max-w-[800px] mx-auto px-4 mt-12">
			<div className="w-full flex-jb-c gap-4">
				<h3 className="text-h3">Profile</h3>
				<EditButton isEdit={isEdit} toggleEdit={() => toggleEdit()} />
			</div>
			<form
				className="grid grid-cols-4 gap-2"
				onSubmit={handleUpdateUserProfile}
			>
				{userProfileFormInputsData.map(input => (
					<Input
						key={input.name}
						{...input}
						initialValue={userData[input.name]}
						disabled={!isEdit}
						handleChangeValue={onFormValueChange}
						validationError={errors[input.name]}
					/>
				))}

				<TextButton
					type="submit"
					text={isLoading ? "Loading..." : "Update"}
					customStyles="col-span-4 my-2 font-medium text-xl text-white bg-primary-ceruleanBlue hover:bg-opacity-90 transition-all"
					disabled={!isEdit}
				/>
			</form>
		</div>
	);
};

export default ProfileForm;
