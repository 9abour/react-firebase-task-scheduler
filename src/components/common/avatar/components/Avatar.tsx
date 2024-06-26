import { Link } from "react-router-dom";
import useGetAvatarName from "../hook/useGetAvatarName";
import { AvatarPropsType } from "../types/index.types";

const AvatarLink = ({ name, customStyles, href }: AvatarPropsType) => {
	const avatarName = useGetAvatarName(name);

	return (
		<Link
			to={href}
			className={`w-[40px] h-[40px] flex-jc-c font-semibold bg-primary-ceruleanBlue overflow-hidden rounded-full text-white border-2 border-primary-ceruleanBlue shadow-static shadow-white ${customStyles}`}
		>
			<span className="select-none">{avatarName}</span>
		</Link>
	);
};

export default AvatarLink;
