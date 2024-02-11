export default (min: number, max: number) => (x: number) =>
	Math.min(Math.max(x, min), max);
