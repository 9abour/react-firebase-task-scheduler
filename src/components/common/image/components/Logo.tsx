import { MdOutlineTaskAlt } from "react-icons/md";

const Logo = () => {
	return (
		<a href="/dashboard" className="flex-jc-c gap-2">
			<MdOutlineTaskAlt size={30} className="text-primary-ceruleanBlue" />
			<h4 className="text-primary-ceruleanBlue">Task Scheduler</h4>
		</a>
	);
};

export default Logo;
