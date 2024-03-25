import { useState } from "react";
import { FirebaseError } from "firebase/app";
import toast from "react-hot-toast";
import FirebaseHelpers from "../helpers/firebase";

type FetchFunction<T> = () => Promise<T>;

const useFetch = <T>() => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null | FirebaseError>(null);

	const fetchData = async (fetchFunction: FetchFunction<T>) => {
		setLoading(true);
		try {
			const result = await fetchFunction();
			setData(result);
		} catch (error) {
			if (error instanceof FirebaseError) {
				toast.error(FirebaseHelpers.generateFirebaseErrorMessage(error));
				setError(error);
			} else {
				toast.error("An unexpected error occurred.");
			}
		}
		setLoading(false);
	};

	return { data, loading, error, fetchData };
};

export { useFetch };
