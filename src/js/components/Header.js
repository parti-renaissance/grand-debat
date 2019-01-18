import React from 'react';
import Writer from './Writer';

const Header = () => {
	return (
		<div className="header">
			<div className="header__bubble header__bubble__one"></div>
			<div className="header__bubble header__bubble__two"></div>
			<div className="header__bubble header__bubble__three"></div>
			<h3>
				<a href="https://en-marche.fr" rel="noopener noreferrer" target="_blank">
					<em>EM!</em>
				</a>
			</h3>

			<h1>Grand Débat National, </h1>

			<Writer strings={['Impliquez-vous !', 'Débattez !', 'Contribuez ! ', 'Participez !']} />
		</div>
	);
};

export default Header;
