import React from 'react';
import adi_preview from './../../img/adi_preview.png';
const Participate = () => {
	return (
		<div className="participate l__wrapper--narrow">
			<h4>Je souhaite participer. Je fais comment ?</h4>
			<p>
				Pour proposer des idées et co-construire la contribution de <em>La République En Marche</em> au Grand Débat National, c'est simple ! Un outil, deux options :
			</p>
			<div className="participate__grid">
				<div>
					<p className="muted">
						<span className="participate__header">Un outil en ligne</span><br />
						L'Atelier des Idées sera lancé fin janvier. <strong>C'est un outil numérique d’intelligence collective, qui sera
						accessible à tous nos adhérents.</strong> Un principe simple : identifiez une problématique et proposez une
						solution pour y répondre. Une fois publiée, votre proposition devient accessible à l'ensemble des
						marcheurs qui pourront l'enrichir, la commenter, la soutenir.
						<br />
						<br />
						<span className="participate__header">Des événements locaux</span><br />
						L'Atelier des Idées, lancé à l'occasion de ce Grand Débat, correspondra également à un format
						d'événement physiques qui seront organisés partout en France par les équipes LaREM : <a rel="noopener noreferrer" href="https://en-marche.fr/evenements/categorie/grand-debat-atelier-idees" target="_blank">trouvez les
						événement près de chez vous</a>. <strong>Les ateliers seront l’occasion de discuter des 4 grands thèmes de ce débat</strong> et d’élaborer ensemble des propositions concrètes au niveau local, national ou encore européen.
					</p>
				</div>
				<div>
					<div>
						<img src={adi_preview} alt="atelier des idées" />
						<div style={{ textAlign: 'center' }}>
							<button type="button" disabled>
								atelier des idées
							</button>
							<small>Bientôt disponible</small>
						</div>

						<br />
					</div>
					{/* <div>

						<button className="pink">
							<a href="https://en-marche.fr/comites" target="_blank" rel="noopener noreferrer">
								rejoindre un comité
							</a>
						</button>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Participate;
