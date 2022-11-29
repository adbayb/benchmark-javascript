import { ElementType, ReactNode, memo, useMemo } from "react";
import { css } from "@emotion/css";
import { StyleProps } from "../../types";

interface BoxProps extends StyleProps {
	as?: ElementType;
	children?: ReactNode;
}

export const Box = memo(function Box({
	as: Component = "div",
	children,
	backgroundColor,
	color,
	display,
	height,
	margin,
	marginBottom,
	marginLeft,
	marginRight,
	marginTop,
	maxHeight,
	maxWidth,
	minHeight,
	minWidth,
	width,
}: BoxProps) {
	const styles = useMemo(
		() =>
			css({
				backgroundColor,
				color,
				display,
				height,
				margin,
				marginBottom,
				marginLeft,
				marginRight,
				marginTop,
				maxHeight,
				maxWidth,
				minHeight,
				minWidth,
				width,
			}),
		[
			backgroundColor,
			color,
			display,
			height,
			margin,
			marginBottom,
			marginLeft,
			marginRight,
			marginTop,
			maxHeight,
			maxWidth,
			minHeight,
			minWidth,
			width,
		]
	);

	return <Component className={styles}>{children}</Component>;
});
