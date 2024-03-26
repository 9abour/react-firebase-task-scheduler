import { DateFilterInputType } from "../../types/index.types";

const DateFilter = ({ value, changeValue }: DateFilterInputType) => {
	return (
		<button className="w-full flex-jc-c text-grey-chateau font-medium text-xs sm:text-sm">
			<input
				type="text"
    onfocus="(this.type='date')"
    onblur="(this.type='text')"
				className="input"
				value={value}
				onChange={changeValue}
    placeholder="Due Date"
			/>
		</button>
	);
};

export default DateFilter;
