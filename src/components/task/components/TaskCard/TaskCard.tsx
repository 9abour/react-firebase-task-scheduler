import CheckboxWithLabel from "../../../common/selection-inputs/components/CheckboxWithLabel";
import { TaskCardType } from "../../types/index.types";
import moment from "moment";
import TaskMenu from "./TaskMenu";
import { IoMdTime } from "react-icons/io";

const TaskCard = ({ task, handleToggleTask }: TaskCardType) => {
	const { id, title, description, priority, status, dueDate, addedAt } = task;

	return (
		<div
			className={`relative w-full h-[200px] flex flex-col justify-between p-2 border-l-8 rounded-md shadow-card task-priority-${priority}`}
		>
			<div className="flex-jb-c">
				<TaskMenu taskId={id} />
				<span className={`priority ${priority} capitalize`}>{priority}</span>
			</div>
			<div>
				<span className="text-sm text-dark-gunPowder">
					{moment(dueDate).format("dddd")}
				</span>
				<h4 className="text-dark-gunPowder line-clamp-2">{title}</h4>
				<p className="text-xs sm:text-sm line-clamp-3 text-grey-monsoon">
					{description}
				</p>
			</div>

			<div className="flex-jb-c">
				<div className="flex-jc-c gap-1 text-dark-gunPowder">
					<IoMdTime size={20} />
					<span className="text-xs sm:text-sm">
						{moment(new Date(addedAt)).fromNow()}
					</span>
				</div>

				<CheckboxWithLabel
					label={{ id, name: "Completed" }}
					checked={status}
					bgColor="bg-primary-ceruleanBlue"
					borderColor="border-grey-ghostWhite"
					customStyles="rounded-md text-white"
					toggle={handleToggleTask}
				/>
			</div>
		</div>
	);
};

export default TaskCard;
