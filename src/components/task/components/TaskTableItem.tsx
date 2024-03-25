import moment from "moment";
import { TaskCardType } from "../types/index.types";
import CheckboxWithLabel from "../../common/selection-inputs/components/CheckboxWithLabel";
import { Link } from "react-router-dom";
import { deleteTask } from "../../../rtk/reducers/deleteTask";
import { useAppDispatch } from "../../../rtk/app/hooks";

const TaskTableItem = ({ task, handleToggleTask }: TaskCardType) => {
	const { id, title, description, priority, status, dueDate, addedAt } = task;
	const dispatch = useAppDispatch();

	return (
		<tr>
			<td className="w-[120px]">
				<span
					className={`w-full py-1 mx-auto block text-center capitalize priority ${priority}`}
				>
					{priority}
				</span>
			</td>
			<td>
				<h4 className="w-max text-dark-gunPowder font-medium">{title}</h4>
			</td>
			<td>
				<span className="text-sm text-dark-gunPowder">
					{moment(dueDate).format("dddd")}
				</span>
			</td>
			<td>
				<p className="text-xs sm:text-sm line-clamp-1">{description}</p>
			</td>
			<td>
				<span className="!w-max block text-xs sm:text-sm">
					{moment(new Date(addedAt)).fromNow()}
				</span>
			</td>
			<td>
				<CheckboxWithLabel
					label={{ id, name: "Completed" }}
					checked={status}
					bgColor="bg-primary-ceruleanBlue"
					borderColor="border-grey-ghostWhite"
					customStyles="rounded-sm text-white"
					toggle={handleToggleTask}
				/>
			</td>
			<td>
				<div>
					<ul className="flex gap-2">
						<li className="w-full">
							<Link to={`/dashboard/edit-task/${id}`}>
								<button className="w-full bg-primary-periwinkleBlue px-2 py-1 rounded-sm">
									Edit
								</button>
							</Link>
						</li>
						<li className="w-full">
							<button
								className="w-full bg-red-500 text-white hover:bg-red-600 px-2 py-1 rounded-sm"
								onClick={() => {
									dispatch(deleteTask(id));
								}}
							>
								Delete
							</button>
						</li>
					</ul>
				</div>
			</td>
		</tr>
	);
};

export default TaskTableItem;
