export default (
	inLow: number,
	inHigh: number,
	outLow: number,
	outHigh: number
) => {
	return (t: number): number => {
		return ((t - inLow) / (inHigh - inLow)) * (outHigh - outLow) + outLow;
	};
};
