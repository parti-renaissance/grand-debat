import React, { Component } from 'react';
import './App.css';
import Header from './js/components/Header';
import Explanatory from './js/components/Explanatory';
import Steps from './js/components/Steps';
import Participate from './js/components/Participate';
import Deputies from './js/components/Deputies';
import Workshop from './js/components/Workshop';
import Cta from './js/components/Cta';
import Footer from './js/components/Footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />

				<div className="l__wrapper--narrow">
					<Explanatory />
				</div>
				<div className="background--grey">
					<div className="l__wrapper">
						<Steps />
					</div>
				</div>
				<div className="background--blue">
					<div className="l__wrapper--narrow">
						<Deputies />
					</div>
				</div>
				<div className="l__wrapper">
					<Participate />
				</div>
				<div className="background--grey">
					<div className="l__wrapper">
						<Workshop />
					</div>
				</div>
				<div className="l__wrapper--narrow">
					<Cta />
				</div>
				<div className="background--blue">
					<div className="l__wrapper">
						<Footer />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
