import React from "react";

const HemisphereDisplay = ({ latitude }) => {
	// console.log(props.latitude);
	const hemisphere = latitude > 0 ? "Northen hemisphere" : "Southen hemisphere";
	return <div>{hemisphere}</div>;
};

export default HemisphereDisplay;
