import { FilterMobPropsType } from "../../types/index.types";
import DateFilter from "./DateFilter";
import FilterButton from "./FilterButton";

const FilterMob = ({
	filterOptions,
	handleChangeActiveFilterOptions,
	dateValue,
	handleDateChange,
}: FilterMobPropsType) => {
	return (
		<div className="absolute w-2/4 left-0 top-[55px] p-2 rounded-md bg-white shadow-card z-10">
			<div className="w-full flex items-start flex-col gap-2 md:gap-4 col-span-1">
				{filterOptions.map(filterOption => (
					<FilterButton
						key={filterOption.name}
						{...filterOption}
						handleChangeActiveFilterOptions={handleChangeActiveFilterOptions}
					/>
				))}

				<DateFilter value={dateValue} changeValue={handleDateChange} />
			</div>
		</div>
	);
};

export default FilterMob;
