import { useEffect } from "react";
import FilterButton from "./FilterButton";
import { useMediaQuery } from "usehooks-ts";
import useToggle from "../../../../hooks/click-handlers/useToggle";
import DateFilter from "./DateFilter";
import useInput from "../../../common/form/hooks/useInput";
import { useFilter } from "../../hooks/useFilter";

const FilterOptions = () => {
	const isMobile = useMediaQuery("(max-width: 768px)");
	const { currentState: filtersMob, toggle: hideFilters } = useToggle(false);
	const { value: dateValue, onChange: handleDateChange } = useInput("");
	const { filterOptions, handleChangeActiveFilterOptions } = useFilter();

	useEffect(() => {
		if (filtersMob) {
			hideFilters(false);
		}
	}, [isMobile]);

	return (
		<>
			{isMobile ? (
				<button
					className={`button col-span-2 ${
						filtersMob
							? "border-primary-ceruleanBlue text-primary-ceruleanBlue"
							: ""
					}`}
					onClick={() => hideFilters()}
				>
					Filters
				</button>
			) : null}

			<div
				className={`w-full flex items-start gap-2 md:gap-4 col-span-6 ${
					isMobile ? "absolute" : ""
				}`}
			>
				<div
					className={`${
						isMobile
							? "absolute w-3/4 left-0 top-[55px] p-2 rounded-md bg-white shadow-card flex flex-col gap-2 z-10"
							: "flex gap-2"
					} ${filtersMob && isMobile ? "flex" : "hidden"} ${
						!isMobile ? "!flex" : ""
					}`}
				>
					{filterOptions.map(filterOption => (
						<FilterButton
							key={filterOption.name}
							{...filterOption}
							handleChangeActiveFilterOptions={handleChangeActiveFilterOptions}
						/>
					))}

					<div className="w-full flex items-start flex-col gap-2 md:gap-4 col-span-1">
						<DateFilter value={dateValue} changeValue={handleDateChange} />
					</div>
				</div>
			</div>
		</>
	);
};

export default FilterOptions;
