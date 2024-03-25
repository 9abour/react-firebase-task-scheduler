import { CiSearch } from "react-icons/ci";
import { SearchBarProps } from "../types/index.types";

const SearchBar = ({
	value,
	changeValue,
	placeholder,
	customStyles,
}: SearchBarProps) => {
	return (
		<form className={`relative w-full max-w-[500px] ${customStyles}`}>
			<input
				className="input"
				type="text"
				value={value}
				onChange={changeValue}
				placeholder={placeholder}
			/>
			<span className="absolute h-full right-2 top-2/4 -translate-y-2/4 text-grey-chateau">
				<CiSearch size={30} className="h-full" />
			</span>
		</form>
	);
};

export default SearchBar;
