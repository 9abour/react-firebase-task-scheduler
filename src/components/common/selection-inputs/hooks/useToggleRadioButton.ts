import { useState } from "react";
import { CheckboxWithLabelType } from "../types/index.types";

const useToggleRadioButton = (
	checkboxWithLabelArray: CheckboxWithLabelType[]
) => {
	const [newData, setNewData] = useState(checkboxWithLabelArray);

	const toggle = (labelId: string) => {
		const updated = checkboxWithLabelArray.map(
			(item: CheckboxWithLabelType) => {
				if (item.label.id == labelId) {
					return {
						...item,
						checked: true,
					};
				} else {
					return {
						...item,
						checked: false,
					};
				}
			}
		);

		setNewData(updated);
	};

	return { toggle, newData };
};

export default useToggleRadioButton;
