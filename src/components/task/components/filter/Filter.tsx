import DateFilter from "./DateFilter";
import FilterButton from "./FilterButton";
import { useEffect } from "react";
import FilterMob from "./FilterMob";
import { useMediaQuery } from "usehooks-ts";
import { useAppDispatch } from "../../../../rtk/app/hooks";
import useInput from "../../../common/form/hooks/useInput";
import { useFilter } from "../../hooks/useFilter";
import useToggle from "../../../../hooks/click-handlers/useToggle";
import SearchBar from "../../../common/form/components/SearchBar";
import { searchTasks } from "../../../../rtk/slices/taskSlice";

const Filter = () => {
	const dispatch = useAppDispatch();
	const { value: searchValue, onChange: handleSearchChange } = useInput("");
	const { value: dateValue, onChange: handleDateChange } = useInput("");
	const { filterOptions, handleChangeActiveFilterOptions } = useFilter();
	const { currentState: filtersMob, toggle: hideFilters } = useToggle(false);
	const isMobile = useMediaQuery("(max-width: 768px)");

	useEffect(() => {
		handleChangeActiveFilterOptions("dueDate", dateValue);
	}, [dateValue]);

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
			) : (
				<div className="w-full flex items-start gap-2 md:gap-4 col-span-6">
					{filterOptions.map(filterOption => (
						<FilterButton
							key={filterOption.name}
							{...filterOption}
							handleChangeActiveFilterOptions={handleChangeActiveFilterOptions}
						/>
					))}

					<DateFilter value={dateValue} changeValue={handleDateChange} />
				</div>
			)}

			{filtersMob && isMobile ? (
				<FilterMob
					dateValue={dateValue}
					filterOptions={filterOptions}
					handleDateChange={handleDateChange}
					handleChangeActiveFilterOptions={handleChangeActiveFilterOptions}
				/>
			) : null}

			<SearchBar
				placeholder="Search by title..."
				value={searchValue}
				changeValue={e => {
					handleSearchChange(e);
					dispatch(searchTasks(e.target.value));
				}}
				customStyles={`col-span-6 md:col-span-3`}
			/>
		</>
	);
};

export default Filter;
