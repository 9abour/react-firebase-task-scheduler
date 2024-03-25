import { useState } from "react";

const useDatePicker = (initialDate: Date) => {
	const [date, setDate] = useState(initialDate);

	const changeDate = (e: Date | null) => {
		if (e) {
			setDate(e);
			return;
		}
		changeDate(initialDate);
	};

	return {
		date,
		changeDate,
	};
};

export default useDatePicker;
