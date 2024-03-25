import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../rtk/app/hooks";
import { filterTasksOptions } from "../../../rtk/slices/taskSlice";

const useFilter = () => {
	const dispatch = useAppDispatch();
	const filterOptions = [
		{ name: "date", options: ["ascending", "descending"] },
		{ name: "status", options: ["true", "false"] },
		{ name: "priority", options: ["high", "medium", "low"] },
	];

	const [activeFilterOptions, setActiveFilterOptions] = useState({
		status: "",
		priority: "",
		date: "",
	});

	const handleChangeActiveFilterOptions = (key: string, value: string) => {
		setActiveFilterOptions(prev => ({
			...prev,
			[key]: value,
		}));
	};

	useEffect(() => {
		dispatch(filterTasksOptions(activeFilterOptions));
	}, [activeFilterOptions]);

	return {
		filterOptions,
		handleChangeActiveFilterOptions,
	};
};

export { useFilter };
