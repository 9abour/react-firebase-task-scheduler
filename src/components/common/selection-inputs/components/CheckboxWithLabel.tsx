import useGenerateCheckboxStyles from "../hooks/useGenerateCheckboxStyles";
import { CheckboxWithLabelType } from "../types/index.types";
import { FaCheck } from "react-icons/fa";

const CheckboxWithLabel = ({
	label = {
		id: "",
		name: "",
	},
	customStyles = "",
	bgColor = "bg-primary-ceruleanBlue",
	borderColor,
	checked,
	toggle,
}: CheckboxWithLabelType) => {
	const { styles } = useGenerateCheckboxStyles({
		customStyles,
		bgColor,
		borderColor,
		checked,
	});

	return (
		<div className="flex items-center gap-1">
			<label
				htmlFor={label.id}
				className={`text-xs md:text-sm font-semibold cursor-pointer ${
					checked
						? "text-primary-ceruleanBlue line-through"
						: "text-dark-gunPowder"
				}`}
			>
				{label.name}
			</label>
			<button
				type="button"
				id={label.id}
				onClick={() => toggle && toggle(label.id)}
				className={`w-[20px] h-[20px] flex-jc-c border-[1.5px] border-primary-periwinkleBlue ${
					checked ? "" : "!border-dark-gunPowder"
				}  ${styles}`}
			>
				{checked ? <FaCheck /> : null}
			</button>
		</div>
	);
};

export default CheckboxWithLabel;
