import { IoIosArrowDown } from "react-icons/io";
import useToggle from "../../../../hooks/click-handlers/useToggle";
import { DropdownType } from "../types/index.types";
import { useOnClickOutside } from "../../../../hooks/click-handlers/useOnClickOutside";

const Dropdown = ({ options, active, changePriority }: DropdownType) => {
	const { currentState: isOpen, toggle: hideOptions } = useToggle(false);

	const handleChangePriority = (priority: string) => {
		changePriority(priority);
		hideOptions();
	};

	const ref = useOnClickOutside(hideOptions);

	return (
		<div className="relative rounded-md z-20">
			<button
				className={`relative priority ${active} w-[140px] py-2 px-4 flex-jb-c capitalize bg-primary-hawkesBlue text-dark-jungleGreen rounded-md shadow-card border-grey-iron z-20`}
				onClick={() => hideOptions()}
				type="button"
			>
				{active}
				<span
					className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all`}
				>
					<IoIosArrowDown size={20} />
				</span>
			</button>
			{isOpen ? (
				<div
					ref={ref}
					className="absolute w-[140px] left-0 bg-white -mt-2 p-2 shadow-card rounded-md z-0"
				>
					{options.map(option => (
						<button
							key={option.name}
							className={`priority ${option.name} w-full py-2 px-4 mt-2 text-dark-jungleGreen hover:opacity-80 rounded-md border-[1.5px] border-grey-iron transition-all`}
							type="button"
							onClick={() => handleChangePriority(option.name)}
						>
							{option.value}
						</button>
					))}
				</div>
			) : null}
		</div>
	);
};

export default Dropdown;
