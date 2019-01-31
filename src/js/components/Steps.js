import React from 'react';
import terrain_img from './../../img/gd-illu-01.svg';
import adi_img from './../../img/gd-illu-02.svg';
import co_construction_img from './../../img/gd-illu-03.svg';
const phases = [
	{
		timeframe: 'Janvier',
		title: 'Sur le terrain',
		value:
			'Les marcheurs sont à <b>l’écoute des citoyens</b> ; sur les marchés, dans la rue, dans leurs immeubles, dans leurs commerces, dans des entreprises, associations et syndicats afin de <b>comprendre ce qui va et ce qui ne va pas</b> et d’<b>aller chercher les bonnes idées chez ceux qui vivent et font les choses.</b> Par ailleurs, chacun(e) est invité(e) à prendre part aux débats au niveau local à encourager les citoyens à s’y rendre, et à organiser des événements près de chez soi.',
		img: terrain_img
	},
	{
		timeframe: 'Février',
		title: "L'Atelier des Idées",
		value:
			'Les marcheurs pourront <b>rédiger</b>, seuls ou à plusieurs, <b>des propositions structurées grâce à un outil numérique d’intelligence collective innovant</b>, lancé à l’occasion de ce débat.',
		img: adi_img
	},
	{
		timeframe: 'Février - Mars',
		title: 'Co-construction',
		value:
			'<a href="#Workshop">4 groupes de travail</a> - 1 par thématique - sont chargés de <b>construire la contribution finale</b> à partir des diverses propositions de marcheurs et d’auditions qu’ils pourront décider de mener pour éclairer leur travail.',
		img: co_construction_img
	}
];
const Steps = () => {
	return (
		<React.Fragment>
			<div className="steps">
				<div className="l__wrapper--narrow">
					<h4>Comment y participer ?</h4>
					<ol className="muted">
						<li>
							<span className="strong">J'assiste à des débats près de chez moi</span><br/>
							Je participe ou j'organise un débat près de chez moi avec ma famille, mes amis, mes collègues, mon association de copropriétaires/de locataires/de parents d’élèves, mes voisins, mon quartier ou autres.
							<ul>
								<li><a href="https://granddebat.fr/events" target="_blank" rel="noopener noreferrer">
									Trouver un événement près de chez moi
								</a></li>
								<li><a href="https://granddebat.fr/project/referencer-son-debat/questionnaire/faites-referencer-votre-evenement-1" target="_blank" rel="noopener noreferrer">
									Organiser un événement
								</a></li>
							</ul>
						</li>
						<li>
							<span className="strong">Je propose des solutions sur l'Atelier des idées</span><br/>
							En tant qu'adhérent(e), je souhaite participer à la contribution politique que fera LaREM en tant que mouvement : un document portant des propositions pour le niveau local, national et européen, qui sera remis à l'exécutif au mois de mars. Pour cela, un nouvel outil d'intelligence collective sera à ma disposition : l’Atelier des Idées.
							<ul>
								<li>
									Découvrir l'Atelier des idées <span className="coming-soon">Disponible début février 2019</span>
								</li>
							</ul>
						</li>
					</ol>
					<h6>La participation du mouvement en 3 temps</h6>
				</div>
				<div className="phases">
					{phases.map((phase, i) => (
						<div key={i}>
							{/* <span> {i + 1} </span>
							<br /> */}
							<img src={phase.img} alt={phase.img} />
							<h5>{phase.timeframe}</h5>
							<h4>{phase.title}</h4>
							<p dangerouslySetInnerHTML={{ __html: phase.value }} />
						</div>
					))}
				</div>
				{/* <span className="text--center">
					Dernière étape, les propositions seront validées par un comité de pilotage politique (à définir).
				</span> */}
			</div>
		</React.Fragment>
	);
};

export default Steps;
