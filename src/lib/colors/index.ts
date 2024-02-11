export const luminance = (n: number) => {
	return 0.2126 * red(n) + 0.7152 * green(n) + 0.0722 * blue(n);
};

export const red = (color: number) => {
	return (color >> 24) & 0xff;
};

export const green = (color: number) => {
	return (color >> 16) & 0xff;
};

export const blue = (color: number) => {
	return (color >> 8) & 0xff;
};
