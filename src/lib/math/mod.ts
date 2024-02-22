export default (n: number, d: number): number => {
	return ((n % d) + d) % d;
};
