import { useState } from "react";
import { ITarget } from "./types/index.types";

const useInput = (
	initialState: string
): { value: string; onChange: (e: ITarget) => void } => {
	const [value, setValue] = useState(initialState);

	return {
		value,
		onChange: (e: ITarget) => setValue(e.target.value.toString()),
	};
};

export default useInput;
