import { ReactElement, useEffect, useState } from "react";

interface RendererProps {
	render: (index: number) => ReactElement;
}

export const Renderer = ({ render }: RendererProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, forceUpdate] = useState({});

	useEffect(() => {
		const intervalId = setInterval(() => {
			forceUpdate({});
		}, 100);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return <>{[...new Array(10000)].map((_, index) => render(index))}</>;
};
