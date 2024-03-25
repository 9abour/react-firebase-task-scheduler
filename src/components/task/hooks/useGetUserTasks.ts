import { useContext, useEffect } from "react";
import AuthContext from "../../../context/authContext";
import { useAppDispatch } from "../../../rtk/app/hooks";
import { getUserTasks } from "../../../rtk/reducers/getUserTasks";

const useGetUserTasks = () => {
	const dispatch = useAppDispatch();
	const { user } = useContext(AuthContext);
	const userId = user?.user.uid;

	useEffect(() => {
		if (userId) {
			dispatch(getUserTasks(userId));
		}
	}, [userId]);
};

export { useGetUserTasks };
