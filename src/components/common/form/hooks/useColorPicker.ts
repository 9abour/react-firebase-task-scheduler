import useToggle from "@/hooks/click-handlers/useToggle";
import { useState } from "react";
import { ColorResult } from "react-color";

const useColorPicker = (defaultColor: string) => {
	const [color, setColor] = useState(defaultColor);
	const { currentState, toggle } = useToggle(false);

	const changeColor = (color: ColorResult) => {
		setColor(color.hex);
	};

	return {
		color,
		changeColor,
		hideColorInput: toggle,
		isColorInputOpen: currentState,
	};
};

export default useColorPicker;
