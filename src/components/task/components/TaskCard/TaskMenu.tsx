import { BsThreeDots } from "react-icons/bs";
import useToggle from "../../../../hooks/click-handlers/useToggle";
import { useOnClickOutside } from "../../../../hooks/click-handlers/useOnClickOutside";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../rtk/app/hooks";
import { deleteTask } from "../../../../rtk/reducers/deleteTask";

const TaskMenu = ({ taskId }: { taskId: string }) => {
	const { currentState, toggle } = useToggle(false);

	const ref = useOnClickOutside(toggle);

	const dispatch = useAppDispatch();

	return (
		<>
			<button
				className="absolute right-2 bg-dark-gunPowder/20 py-1 px-1 rounded-sm"
				onClick={() => toggle()}
			>
				<BsThreeDots size={20} className="text-dark-gunPowder" />
			</button>

			{currentState ? (
				<div
					ref={ref}
					className="absolute top-4 right-12 bg-white shadow-card rounded-sm py-1 px-2"
				>
					<ul>
						<li>
							<Link to={`/dashboard/edit-task/${taskId}`}>
								<button className="card__menu__button">Edit</button>
							</Link>
						</li>
						<li>
							<button
								className="card__menu__button delete"
								onClick={() => {
									dispatch(deleteTask(taskId));
								}}
							>
								Delete
							</button>
						</li>
					</ul>
				</div>
			) : null}
		</>
	);
};

export default TaskMenu;
