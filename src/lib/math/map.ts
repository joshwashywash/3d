export default (
		inLow: number,
		inHigh: number,
		outLow: number,
		outHigh: number
	) =>
	(t: number): number =>
		((t - inLow) / (inHigh - inLow)) * (outHigh - outLow) + outLow;
