import { useGenerateCheckboxStylesType } from "../types/index.types";

const useGenerateCheckboxStyles = ({
	checked,
	bgColor,
	borderColor,
	customStyles = "",
}: useGenerateCheckboxStylesType) => {
	const styles = `checkbox ${checked ? "checked " + borderColor : ""} ${
		checked ? bgColor : "bg-background"
	} hover:${borderColor} transition-all ${customStyles}`;

	return { styles };
};

export default useGenerateCheckboxStyles;
