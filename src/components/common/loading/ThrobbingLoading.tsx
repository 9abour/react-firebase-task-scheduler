const ThrobbingLoading = () => {
	return (
		<div className="relative inline-flex">
			<div className="w-4 h-4 bg-white rounded-full"></div>
			<div className="w-4 h-4 bg-white rounded-full absolute top-0 left-0 animate-ping"></div>
			<div className="w-4 h-4 bg-white rounded-full absolute top-0 left-0 animate-pulse"></div>
		</div>
	);
};

export default ThrobbingLoading;
