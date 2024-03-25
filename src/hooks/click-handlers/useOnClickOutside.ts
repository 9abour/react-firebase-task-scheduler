import { useRef, useEffect } from "react";

type CallbackFunction = () => void;

export const useOnClickOutside = (
	callback: CallbackFunction,
	screenSize: boolean = true
): React.RefObject<HTMLDivElement> => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (
				ref.current &&
				!ref.current.contains(event.target as Node) &&
				screenSize
			) {
				callback();
			}
		};

		document.addEventListener("click", handleClick, true);

		return () => {
			document.removeEventListener("click", handleClick, true);
		};
	}, [ref, screenSize, callback]);

	return ref;
};
