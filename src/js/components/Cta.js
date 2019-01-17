import React from 'react';

const Cta = props => (
	<div>
		<div className="cta">
			<div>
				<div>
					<h4>Notre révolution démocratique à besoin de vous</h4>
					<p>
						L'indépendance de LaREM, c'est aussi son indépendance financière. Grâce aux dons, et uniquement grâce à
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
</div>
);

export default Cta;
