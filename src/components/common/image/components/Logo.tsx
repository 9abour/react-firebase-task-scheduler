import { MdOutlineTaskAlt } from "react-icons/md";
import AuthContext from "../../../../context/authContext";
import { useContext } from "react";

const Logo = () => {
	const { user } = useContext(AuthContext);

	return (
		<a href={user ? "/dashboard" : "/"} className="flex-jc-c gap-2">
			<MdOutlineTaskAlt size={30} className="text-primary-ceruleanBlue" />
			<h4 className="text-primary-ceruleanBlue">Task Scheduler</h4>
		</a>
	);
};

export default Logo;
