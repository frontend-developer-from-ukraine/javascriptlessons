	const getMaxAbsolutNumber = arr => {
	    const absoluteValues = arr
	        .map(num => Math.abs(num));

	    return Math.max(...absoluteValues);

	}