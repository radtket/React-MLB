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

export function randoNumber(range) {
	return Math.floor(Math.random() * range);
}

export function createGroupedArray(arr, chunkSize) {
	const groups = [];
	let i;
	for (i = 0; i < arr.length; i += chunkSize) {
		groups.push(arr.slice(i, i + chunkSize).sort(propComparator('City')));
	}
	return groups;
}

export const oneHour = 60 * 60 * 1000;

export function getAge(d1) {
	const diff = new Date().getTime() - d1.getTime();
	return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

export function inchesToFeet(inches) {
	const feetFromInches = Math.floor(inches / 12); // There are 12 inches in a foot
	const inchesRemainder = inches % 12;
	return `${feetFromInches}-${inchesRemainder}`;
}
