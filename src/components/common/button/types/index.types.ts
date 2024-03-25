export interface TextButtonPropsType {
	text: string;
	textColor?: string;
	customStyles?: string;
	type?: "button" | "submit" | undefined;
	onclick?: () => void;
	disabled?: boolean;
	loading?: boolean;
}
