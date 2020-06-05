import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Arthur'
		};
	}
	render() {
		return (
			<div className="Page-wrapper">
				<h2>ada app</h2>
				<Home />
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
