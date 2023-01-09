interface AvatarProps {
	children: string | number;
}

const Avatar = ({ children }: AvatarProps) => {
	return <span className="avatar">{children}</span>;
};

export const Case = () => {
	return (
		<div className="container">
			{[...new Array(10000)].map((_, index) => {
				return <Avatar key={index}>{index}</Avatar>;
			})}
		</div>
	);
};
