import useGetAvatarName from "../hook/useGetAvatarName";
import { AvatarPropsType } from "../types/index.types";
import AvatarImage from "./AvatarImage";

const AvatarLink = ({
	name,
	image_url,
	customStyles,
	href,
}: AvatarPropsType) => {
	const avatarName = useGetAvatarName(name);

	return (
		<a
			href={href}
			className={`w-[40px] h-[40px] flex-jc-c font-semibold bg-primary-ceruleanBlue overflow-hidden rounded-full text-white border-2 border-primary-ceruleanBlue shadow-static shadow-white ${customStyles}`}
		>
			{image_url ? (
				<AvatarImage image_url={image_url} />
			) : (
				<span className="select-none">{avatarName}</span>
			)}
		</a>
	);
};

export default AvatarLink;
