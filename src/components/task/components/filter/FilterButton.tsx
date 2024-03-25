import { FilterButtonType } from "../../types/index.types";
import { useEffect, useState } from "react";

import { RxDoubleArrowDown, RxDoubleArrowUp } from "react-icons/rx";

const FilterButton = ({
	name,
	options,
	handleChangeActiveFilterOptions,
}: FilterButtonType) => {
	const [activeOption, setActiveOption] = useState<string>("");
	const [count, setCount] = useState(0);

	const counter = () => {
		if (count < options.length) {
			setCount(prev => prev + 1);
			setActiveOption(options[count]);
		} else {
			setActiveOption("");
			setCount(0);
		}
	};

	useEffect(() => {
		handleChangeActiveFilterOptions(name, activeOption);
		console.log({ activeOption });
	}, [activeOption]);

	return (
		<button
			className={`h-[45px] w-full flex-jc-c gap-1 p-2 bg-primary-hawkesBlue text-dark-jungleGreen rounded-md border-[1.5px] border-grey-iron hover:border-primary-ceruleanBlue text-xs sm:text-sm hover:text-dark-jungleGreen ${
				activeOption ? "text-dark-jungleGreen" : "text-grey-chateau"
			}`}
			onClick={counter}
		>
			{name === "status" ? (
				<p className="capitalize">
					{activeOption
						? activeOption === "true"
							? "Completed"
							: "Not Completed"
						: name}
				</p>
			) : (
				<p className="capitalize">{activeOption ? activeOption : name}</p>
			)}
			<div>
				{count < options.length ? (
					<RxDoubleArrowDown size={15} />
				) : (
					<RxDoubleArrowUp size={15} />
				)}
			</div>
		</button>
	);
};

export default FilterButton;
