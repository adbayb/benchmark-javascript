export default function Case() {
	return [...new Array(3000)].map((_, index) => {
		return <div key={index}>{index}</div>;
	});
}
