import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import NavLayout from './components/NavLayout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Tech from './pages/Tech';
import Contact from './pages/Contact';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			home: true
		};
	}
	render() {
		return (
			<div>
				<Router>
						<Background />
						<NavLayout />
						<Routes>
							<Route path="/" element={<Home />}></Route>
							<Route path="/about" element={<About />}></Route>
							<Route path="/projects" element={<Projects />}></Route>
							<Route path="/tech" element={<Tech />}></Route>
							<Route path="/contact" element={<Contact />}></Route>
						</Routes>
				</Router>
			</div>
		);
	}
}

export default App;
