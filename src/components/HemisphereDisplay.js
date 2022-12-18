import React from "react";
import northenPic from "../img/northern-hemisphere.png";
import southenPic from "../img/southern-hemisphere.png";

const hemisphereConfig = {
	Northen: {
		text: "it is northen hemisphere",
		pic: northenPic,
	},
	Southen: {
		text: "it is southen hemisphere",
		pic: southenPic,
	},
};

const HemisphereDisplay = ({ latitude }) => {
	// console.log(props.latitude);
	const hemisphere = latitude > 0 ? "Northen" : "Southen";
	const { text, pic } = hemisphereConfig[hemisphere];

	return (
		<div>
			<img src={pic} alt='hemisphere representation' />
			{text}
		</div>
	);
};

export default HemisphereDisplay;
