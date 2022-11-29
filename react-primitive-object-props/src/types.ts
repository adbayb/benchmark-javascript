type ColorValue = "lightcoral" | "lightblue";

type DimensionValue = string | number;

type PositionValue = number | string | "auto";

export interface StyleProps {
	backgroundColor?: ColorValue;
	color?: ColorValue;
	display?: "flex" | "inline-flex";
	width?: DimensionValue;
	maxWidth?: DimensionValue;
	minWidth?: DimensionValue;
	height?: DimensionValue;
	maxHeight?: DimensionValue;
	minHeight?: DimensionValue;
	margin?: PositionValue;
	marginBottom?: PositionValue;
	marginTop?: PositionValue;
	marginLeft?: PositionValue;
	marginRight?: PositionValue;
}
