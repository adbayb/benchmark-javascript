import { Renderer } from "../../Renderer";
import { Box } from "./Box";

export default function Case() {
	return (
		<Renderer
			render={(index) => (
				<Box
					key={index}
					display="inline-flex"
					backgroundColor="lightblue"
					width={50}
					height={50}
					margin={4}
				>
					{index}
				</Box>
			)}
		/>
	);
}
