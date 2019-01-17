import React from 'react';

const Footer = () => {
	return (
		<div className="footer">
			<ul>
				<li><a href="https://en-marche.fr/mentions-legales" target="_blank" rel="noopener noreferrer">Mentions Légales</a></li>
				<li><a href="https://en-marche.fr/politique-cookies" target="_blank" rel="noopener noreferrer">Politique de Cookies</a></li>
				<li><a href="https://en-marche.fr/politique-protection-donnees" target="_blank" rel="noopener noreferrer">Politique de Protection des Données</a></li>
				<li><a href="https://github.com/EnMarche/grand-debat" target="_blank" rel="noopener noreferrer">Code sur Github</a></li>
			</ul>
			<span className="muted">© La République En Marche !</span>
		</div>
	);
};

export default Footer;
