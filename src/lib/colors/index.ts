export const luminance = (n: number): number => {
	return 0.2126 * red(n) + 0.7152 * green(n) + 0.0722 * blue(n);
};

export const perceived_luminance = (n: number): number => {
	return 0.299 * red(n) + 0.587 * green(n) + 0.114 * blue(n);
};

export const brightness = (n: number): number => {
	return (red(n) + green(n) + blue(n)) / 3;
};

export const red = (color: number): number => {
	return (color >> 24) & 0xff;
};

export const green = (color: number): number => {
	return (color >> 16) & 0xff;
};

export const blue = (color: number): number => {
	return (color >> 8) & 0xff;
};
