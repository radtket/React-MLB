export function propComparator(propArg) {
	return function(a, b) {
		if (a[propArg] > b[propArg]) {
			return 1;
		} else if (b[propArg] > a[propArg]) {
			return -1;
		}
		return 0;
	};
}

export function createGroupedArray(arr, chunkSize) {
	const groups = [];
	let i;
	for (i = 0; i < arr.length; i += chunkSize) {
		groups.push(arr.slice(i, i + chunkSize).sort(propComparator('City')));
	}
	return groups;
}
