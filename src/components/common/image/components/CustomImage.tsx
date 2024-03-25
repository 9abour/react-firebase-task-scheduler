import { CustomImageType } from "../types/index.types";

const CustomImage = ({ src, alt, customStyles }: CustomImageType) => {
	return (
		<img
			className={`w-full h-full${customStyles ? " " + customStyles : ""}`}
			src={src}
			alt={alt}
		/>
	);
};

export default CustomImage;
