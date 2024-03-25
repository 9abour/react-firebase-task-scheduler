import { useState } from "react";
import Form from "../../common/form/components/Form";
import useHandleFormInputChange from "../../common/form/hooks/useHandleFormInputChange";
import { useValidation } from "../../common/form/hooks/useValidation";
import Dropdown from "../../common/selection-inputs/components/Dropdown";
import { addTaskFormInputsData, prioritiesOptions } from "../data/task.data";
import { useAddTask } from "../hooks/useAddTask";

const AddTaskForm = () => {
	const { formValues, onFormValueChange } = useHandleFormInputChange();
	const { errors, validationCheck } = useValidation(addTaskFormInputsData);
	const [priority, setPriority] = useState("medium");
	const { addTask } = useAddTask({ ...formValues, priority });

	const handleSubmit = async () => {
		const isError = await validationCheck({ ...formValues, priority });

		if (!isError) {
			addTask();
		}
	};

	return (
		<>
			<Form
				formText="Add Task"
				submitText="Add"
				inputs={addTaskFormInputsData}
				submitFunc={handleSubmit}
				validationErrors={errors}
				onFormValueChange={onFormValueChange}
				customStyles="w-full max-w-[1200px] mx-auto"
			>
				<Dropdown
					changePriority={setPriority}
					active={priority}
					options={prioritiesOptions}
				/>
			</Form>
		</>
	);
};

export default AddTaskForm;
