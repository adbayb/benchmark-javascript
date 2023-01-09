import { css, keyframes } from "@emotion/css";

const pulse = keyframes({
	from: {
		transform: "scale(1)",
	},
	to: {
		transform: "scale(1.2)",
	},
});

const containerStyles = css({
	display: "flex",
	flexWrap: "wrap",
	width: "100%",
	gap: 12,
});

const avatarStyles = css({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: 50,
	height: 50,
	backgroundColor: "black",
	border: "solid 4px lightyellow",
	borderRadius: "50%",
	color: "lightgoldenrodyellow",
	fontWeight: 600,
	animation: `${pulse} 1s ease alternate-reverse infinite`,
});

interface AvatarProps {
	children: string | number;
}

const Avatar = ({ children }: AvatarProps) => {
	return <span className={avatarStyles}>{children}</span>;
};

export const Case = () => {
	return (
		<div className={containerStyles}>
			{[...new Array(10000)].map((_, index) => {
				return <Avatar key={index}>{index}</Avatar>;
			})}
		</div>
	);
};
