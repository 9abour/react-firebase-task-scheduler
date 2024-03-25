import { TextButtonPropsType } from "../types/index.types";

const TextButton = ({
	text,
	customStyles,
	onclick,
	type,
	disabled,
	loading,
}: TextButtonPropsType) => {
	const handleOnClick = () => {
		if (onclick) {
			onclick();
		}
	};

	return (
		<button
			type={type}
			className={`px-4 py-[5px] rounded-md transition-all ${
				customStyles ? customStyles : ""
			}`}
			onClick={handleOnClick}
			disabled={disabled || loading}
		>
			{loading ? "Loading..." : text}
		</button>
	);
};

export default TextButton;
