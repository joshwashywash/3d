export default (min: number, max: number) => (x: number) => {
	return Math.max(min, Math.min(x, max));
};
