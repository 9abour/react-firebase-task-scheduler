const convertToRecord = <T>(data: T): Record<string, string> => {
	const record: Record<string, string> = {};

	for (const key in data) {
		if (Object.prototype.hasOwnProperty.call(data, key)) {
			record[key] = String(data[key]);
		}
	}

	return record;
};

export { convertToRecord };
