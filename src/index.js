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
		this.state = { latitude: null, errorMsg: "" };

		navigator.geolocation.getCurrentPosition(
			position => {
				// console.log(position);
				this.setState({ latitude: position.coords.latitude });
			},

			error => {
				this.setState({ errorMsg: error.message });
			}
		);
	}

	render() {
		return (
			<div>
				{this.state.latitude}
				{this.state.errorMsg}
			</div>
		);
	}
}

createRoot(document.getElementById("root")).render(<App />);
