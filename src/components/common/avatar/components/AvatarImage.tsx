import { AvatarImagePropsType } from "../types/index.types";

const AvatarImage = ({ image_url }: AvatarImagePropsType) => {
	return (
		<img
			src={image_url}
			alt="avatar image"
			className="w-full object-cover border-2 rounded-full"
		/>
	);
};

export default AvatarImage;
