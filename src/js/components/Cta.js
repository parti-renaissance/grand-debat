import React from 'react';

const Cta = props => (
	<div>
		<div className="cta">
			<div>
				<div>
					<h4>Notre révolution démocratique à besoin de vous</h4>
					<p>
						L'indépendance d'EM!, c'est aussi son indépendance financière. Grâce aux dons, et uniquement grâce à
						eux, nous avons réussi à lancer un mouvement inédit. Cette liberté, c'est notre ADN. Contribuez.
					</p>
				</div>
				<div>
					<div>
						<button className="full--blue">
							<a href="https://en-marche.fr/adhesion" target="_blank" rel="noopener noreferrer">
								j'adhère
							</a>
						</button>
						<div>
							<hr />
							<span>ou</span>
							<hr />
						</div>
						<button className="pink" href="https://en-marche.fr/don" target="_blank" rel="noopener noreferrer">
							<a href="https://en-marche.fr/don" target="_blank" rel="noopener noreferrer">
								je fais un don
							</a>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div className="footer">
			<ul>
				<li><a href="https://en-marche.fr/mentions-legales" target="_blank" rel="noopener noreferrer">Mentions Légales</a></li>
				<li><a href="https://en-marche.fr/politique-cookies" target="_blank" rel="noopener noreferrer">Politique de Cookies</a></li>
				<li><a href="https://en-marche.fr/politique-protection-donnees" target="_blank" rel="noopener noreferrer">Politique de Protection des Données</a></li>
				<li><a href="https://github.com/EnMarche/grand-debat" target="_blank" rel="noopener noreferrer">Code sur Github</a></li>
			</ul>
			<span className="muted">© La République En Marche !</span>
		</div>
</div>
);

export default Cta;
