import { useAppDispatch } from "../../../../rtk/app/hooks";
import useInput from "../../../common/form/hooks/useInput";
import SearchBar from "../../../common/form/components/SearchBar";
import { searchTasks } from "../../../../rtk/slices/taskSlice";
import FilterOptions from "./FilterOptions";

const Filter = () => {
	const dispatch = useAppDispatch();
	const { value: searchValue, onChange: handleSearchChange } = useInput("");

	return (
		<>
			<FilterOptions />

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
