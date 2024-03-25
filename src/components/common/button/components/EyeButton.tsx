import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const EyeButton = ({
	isShowPassword,
	toggle,
	error,
}: {
	isShowPassword: boolean | null;
	toggle: () => void;
	error: string | undefined;
}) => {
	return (
		<button
			type="button"
			onClick={toggle}
			className={`${
				error ? "-mt-3 " : ""
			} absolute right-4 top-2/4 -translate-y-2/4 text-grey-monsoon hover:text-primary-ceruleanBlue`}
		>
			{isShowPassword ? <IoIosEyeOff /> : <IoIosEye />}
		</button>
	);
};

export default EyeButton;
