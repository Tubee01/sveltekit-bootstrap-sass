/**
 *
 * @param  {...any} classNames
 * @returns  {string}
 */
export function mergeClassNames(...classNames) {
	return classNames.reduce((acc, className) => {
		if (typeof className === 'string') {
			return acc ? `${acc} ${className}` : className;
		} else if (typeof className === 'object') {
			return Object.entries(className).reduce((acc2, [key, value]) => {
				if (value) {
					return acc2 ? `${acc2} ${key}` : key;
				} else {
					return acc2;
				}
			}, acc);
		} else {
			return acc;
		}
	}, '');
}
