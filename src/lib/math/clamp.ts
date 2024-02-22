export default (min: number, max: number) => {
	return (x: number): number => {
		return Math.min(Math.max(x, min), max);
	};
};
