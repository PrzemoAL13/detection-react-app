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
	constructor(props) {
		super(props);
		this.state = { latitude: null };

		navigator.geolocation.getCurrentPosition(
			position => {
				// console.log(position);
				this.setState({ latitude: position.coords.latitude });
			},

			error => console.log(error)
		);
	}

	render() {
		return <div>{this.state.latitude}</div>;
	}
}

createRoot(document.getElementById("root")).render(<App />);
