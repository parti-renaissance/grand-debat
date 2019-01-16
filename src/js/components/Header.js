import React from 'react';
import Writer from './Writer';

const Header = () => {
	return (
		<div className="header">
			<h3>
				<em>EM !</em>
			</h3>

			<h1>Grand Débat National, </h1>

			<Writer strings={['Impliquez-vous !', 'Débattez !', 'Contribuez ! ', 'Participez !']} />
		</div>
	);
};

export default Header;
