import React from "react";
import { createRoot } from "react-dom/client";

// const App = () => {
// 	navigator.geolocation.getCurrentPosition(
// 		position => console.log(position),
// 		error => console.log(error)
// 	);
// 	return <div>Latitude: </div>;
// };

class App extends React.Component {
	render() {
		navigator.geolocation.getCurrentPosition(
			position => console.log(position),
			error => console.log(error)
		);
		return <div>You are in Northen hemisphere;</div>;
	}
}

createRoot(document.getElementById("root")).render(<App />);
