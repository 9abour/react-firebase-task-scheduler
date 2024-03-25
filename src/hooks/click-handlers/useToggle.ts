import { useState } from "react";

const useToggle = (defaultValue: boolean | null = false) => {
	const [currentState, setValue] = useState(defaultValue);

	const toggle = (value?: boolean) => {
		if (value !== undefined) {
			setValue(value);
		} else {
			setValue(prev => !prev);
		}
	};

	return {
		currentState,
		toggle,
	};
};

export default useToggle;
