import React from 'react';
import adi_preview from './../../img/adi_preview.png';
const Participate = () => {
	return (
		<div className="participate">
			<h6>Je souhaite participer. Je fais comment ?</h6>
			<div>
				<div>
					<p className="muted">
						L’Atelier d’Idées sera lancé fin janvier. C’est un outil numérique d’intelligence collective qui
						repense la remontée d’idées et de propositions de politiques publiques au sein de notre
						mouvement. Il sera accessible à nos adhérents.
					</p>
					<button>atelier des idées</button>
					<small>Bientôt disponible</small>
					<br />
					<img src={adi_preview} alt="atelier des idées" />
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
						<a href="https://en-marche.fr/comites">rejoindre un comité</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Participate;
