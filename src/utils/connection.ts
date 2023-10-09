export const fetchData = async (url: string) =>
	await fetch(url).then((res) => res.json());
