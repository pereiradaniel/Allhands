import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		return (
			<h1>App.jsx</h1>
		)
	}
}

if(Meteor.isClient) {
	Meteor.startup(function() {
		ReactDOM.render(<App />, document.getElementById("render-target"));
	});
}