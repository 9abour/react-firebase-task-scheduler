import { useNavigate, useParams } from "react-router-dom";
import useToggle from "../../../hooks/click-handlers/useToggle";
import TextButton from "../../common/button/components/TextButton";
import Input from "../../common/form/components/Input";
import useHandleFormInputChange from "../../common/form/hooks/useHandleFormInputChange";
import { useValidation } from "../../common/form/hooks/useValidation";
import CheckboxWithLabel from "../../common/selection-inputs/components/CheckboxWithLabel";
import { editTaskFormInputData, prioritiesOptions } from "../data/task.data";
import { useEditTask } from "../hooks/useEditTask";
import Loader from "../../common/loading/Loader";
import { convertToRecord } from "../../../helpers/convertToRecord";
import { FormEvent, useEffect, useState } from "react";
import Textarea from "../../common/form/components/Textarea";
import Dropdown from "../../common/selection-inputs/components/Dropdown";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import toast from "react-hot-toast";
import { useFetch } from "../../../hooks/useFetch";
import { useAppDispatch, useAppSelector } from "../../../rtk/app/hooks";
import { deleteTask } from "../../../rtk/reducers/deleteTask";

const EditTask = () => {
	const { formValues, onFormValueChange } = useHandleFormInputChange();
	const { errors, validationCheck } = useValidation(editTaskFormInputData);
	const { taskId } = useParams();
	const { task: oldTask } = useEditTask(taskId);
	const taskData = convertToRecord(oldTask);
	const { currentState: status, toggle: toggleTaskUi } = useToggle(null);
	const [priority, setPriority] = useState<null | string>(null);
	const { fetchData, loading } = useFetch();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { tasks } = useAppSelector(state => state.task.data);

	const handleSubmitEditTask = async (e: FormEvent) => {
		e.preventDefault();

		const isError = await validationCheck(formValues);

		if (!isError && taskId) {
			const updatedTaskData = {
				...formValues,
				priority,
				status,
			};
			const isDuplicate = tasks.find(
				task => task.title === formValues.title && task.id !== taskId
			);

			if (isDuplicate) {
				return toast.error("Task already exists with the same title");
			}

			fetchData(async () => {
				const tasksRef = doc(db, "tasks", taskId);
				await updateDoc(tasksRef, updatedTaskData);
				toast.success("Your task updated successfully");
			});
		}
	};

	const handleDeleteTask = async () => {
		if (taskId) {
			await dispatch(deleteTask(taskId));
			navigate("/dashboard");
		}
	};

	/*
		This hook is responsible for updating the state when the old task data changes,
		and setting initial values for status and priority states.
	*/
	useEffect(() => {
		if (oldTask) {
			if (status === null && priority === null) {
				toggleTaskUi(oldTask.status);
				setPriority(oldTask.priority);
			}
		}
	}, [oldTask, status, toggleTaskUi]);

	if (!oldTask) return <Loader />;

	return (
		<div className="w-full max-w-[800px] mx-auto mt-12 px-4">
			<h3 className="text-h3">Edit Task</h3>
			<form className="grid grid-cols-4 gap-2" onSubmit={handleSubmitEditTask}>
				{editTaskFormInputData.map(input =>
					input.type === "textarea" ? (
						<Textarea
							key={input.name}
							{...input}
							initialValue={taskData[input.name]}
							handleChangeValue={onFormValueChange}
							validationError={errors[input.name]}
						/>
					) : (
						<Input
							key={input.name}
							{...input}
							initialValue={taskData[input.name]}
							handleChangeValue={onFormValueChange}
							validationError={errors[input.name]}
						/>
					)
				)}

				<div className="w-full flex gap-2">
					<Dropdown
						changePriority={setPriority}
						active={priority || "medium"}
						options={prioritiesOptions}
					/>

					<CheckboxWithLabel
						label={{ id: taskData.id, name: "Completed" }}
						checked={status}
						bgColor="bg-primary-ceruleanBlue"
						borderColor="border-grey-ghostWhite"
						customStyles="rounded-md text-white"
						toggle={() => toggleTaskUi()}
					/>
				</div>

				<div className="col-span-4 flex gap-2">
					<TextButton
						type="submit"
						text={loading ? "Loading..." : "Update"}
						customStyles="w-full my-2 font-medium text-xl text-white bg-primary-ceruleanBlue hover:bg-opacity-90 transition-all"
					/>
					<TextButton
						type="button"
						text={"Delete"}
						customStyles="w-full my-2 font-medium text-xl text-white hover:bg-opacity-90 card__menu__button delete transition-all"
						onclick={handleDeleteTask}
					/>
				</div>
			</form>
		</div>
	);
};

export default EditTask;
