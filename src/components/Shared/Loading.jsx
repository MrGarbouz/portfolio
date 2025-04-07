import React from "react";
import anime from "animejs";

const Loading = ({ loading }) => {
	const animate = () => {
		const loader = anime.timeline({
			complete: () => loading(false),
		});

		loader
			.add({
				targets: "#logo path",
				delay: 300,
				duration: 1500,
				easing: "easeInOutQuart",
				strokeDashoffset: [anime.setDashoffset, 0],
			})
			.add({
				targets: "#logo #B",
				duration: 700,
				easing: "easeInOutQuart",
				opacity: 1,
			})
			.add({
				targets: "#logo",
				delay: 500,
				duration: 300,
				easing: "easeInOutQuart",
				opacity: 0,
				scale: 0.1,
			})
			.add({
				targets: ".loader",
				duration: 200,
				easing: "easeInOutQuart",
				opacity: 0,
				zIndex: -1,
			});
	};

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			//
		}, 10);
		animate();
		return () => clearTimeout(timeout);
	}, []);

	return (
		<div className="loading-container">
			
		</div>
	);
};

export default Loading;
