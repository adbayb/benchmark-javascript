import { ElementType, ReactNode, memo, useMemo } from "react";
import { type CSSInterpolation, css } from "@emotion/css";
import { StyleProps } from "../../types";

interface BoxProps {
	as?: ElementType;
	children?: ReactNode;
	style?: StyleProps;
}

export const Box = memo(function Box({
	as: Component = "div",
	children,
	style,
}: BoxProps) {
	const styles = useMemo(
		() => (!style ? undefined : css(style as CSSInterpolation)),
		[style]
	);

	return <Component className={styles}>{children}</Component>;
});
