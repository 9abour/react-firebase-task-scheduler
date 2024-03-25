import { BiTaskX } from "react-icons/bi";

const EmptyTasks = ({ text }: { text: string }) => {
	return (
		<div className="flex-jc-c flex-col p-8 text-grey-iron w-fit mx-auto text-center">
			<BiTaskX size={200} />
			<h3 className="font-semibold text-4xl text-grey-iron">{text}</h3>
		</div>
	);
};

export default EmptyTasks;
