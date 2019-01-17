import React from 'react';
import adi_preview from './../../img/adi_preview.png';
const Participate = () => {
	return (
		<div className="participate ">
			<h6>Je souhaite participer. Je fais comment ?</h6>
			<p className="muted">
				Pour proposer des idées et co-construire la contribution de La République En Marche au Grand Débat, un
				outil, deux options : <br />
				<br />
				<em>En ligne</em> <br />
				L’Atelier des Idées sera lancé fin janvier. C’est un outil numérique d’intelligence collective, qui sera
				accessible à tous nos adhérents. Un principe simple : identifiez une problématique et proposez une
				solution pour y répondre. Une fois publiée, votre proposition devient accessible à l’ensemble des
				marcheurs qui pourront l’enrichir, la commenter, la soutenir.
				<br />
				<br />
				<em>Evénements locaux</em>
				<br /> L’Atelier des Idées, lancé à l’occasion de ce Grand Débat, correspondra également à un format
				d’événement physiques qui seront organisés partout en France par les équipes LaREM. Pour trouver un
				événement près de chez vous rendez-vous sur la carte interactive ci-contre. Les ateliers seront
				l’occasion de discuter des 4 grands thèmes de ce débat et d’élaborer ensemble des propositions concrètes
				au niveau local, national ou encore européen.
			</p>
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
				<div>
					<p className="muted">
						Lancé à l’occasion de ce grand débat, il correspondra également à un format d’événement
						physiques qui seront organisés partout en France. Nous vous conseillons de vous rapprocher de
						votre responsable local (référent ou animateur) pour en savoir plus sur la tenue de ces
						événements près de chez vous. Les ateliers seront l’occasion de discuter des quatre grands
						thèmes de ce débat et de formuler des propositions concrètes au niveau local, national ou encore
						européen. Vous pourrez décrire des choses qui marchent (ou pas) proche de chez vous, dans votre
						quotidien ou dans le pays et rédiger des propositions structurées. Si vous préférez le faire
						depuis chez vous, vous pourrez aussi avoir accès à la plateforme de manière individuelle. Toutes
						vos propositions seront publiques et consultables par tous. Les adhérents pourront commenter,
						soutenir et proposer des modifications.
					</p>
					<button className="pink">
						<a href="https://en-marche.fr/comites" target="_blank" rel="noopener noreferrer">
							rejoindre un comité
						</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Participate;
