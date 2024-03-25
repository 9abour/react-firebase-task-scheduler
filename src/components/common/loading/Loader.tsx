const Loader = () => {
	return (
		<div className="absolute top-0 left-0 w-screen h-screen grid place-items-center bg-grey-ghostWhite z-50">
			<div className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-primary-ceruleanBlue border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
		</div>
	);
};

export default Loader;
