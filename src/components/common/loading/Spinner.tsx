const Spinner = () => {
	return (
		<div className="w-full h-full flex-jc-c my-4">
			<div className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-primary-ceruleanBlue border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
		</div>
	);
};

export default Spinner;
