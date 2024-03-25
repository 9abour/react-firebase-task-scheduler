import { EditButtonType } from "./types/index.types";

const EditButton = ({ isEdit, toggleEdit }: EditButtonType) => {
	return (
		<button
			onClick={toggleEdit}
			className={`relative w-[40px] h-[20px] rounded-full shadow-card ${
				isEdit ? "bg-primary-ceruleanBlue" : "bg-grey-monsoon"
			} transition-all`}
		>
			<span
				className={`absolute rounded-full top-0 w-[20px] h-[20px] bg-white ${
					isEdit ? "right-0" : "right-[20px]"
				} transition-all`}
			/>
		</button>
	);
};

export default EditButton;
