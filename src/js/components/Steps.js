import React from 'react';
import terrain_img from './../../img/gd-illu-01.svg';
import adi_img from './../../img/gd-illu-02.svg';
import co_construction_img from './../../img/gd-illu-03.svg';
const phases = [
	{
		timeframe: 'Janvier',
		title: 'Sur le terrain',
		value:
			'Nos adhérents seront à <b>l’écoute des citoyens</b> ; sur les marchés, dans la rue, dans leurs immeubles, dans leurs commerces, dans des entreprises, associations et syndicats afin de <b>comprendre ce qui va et ce qui ne va pas</b> et d’<b>aller chercher les bonnes idées chez ceux qui vivent et font les choses.</b>',
		img: terrain_img
	},
	{
		timeframe: 'Février',
		title: "L'Atelier des Idées",
		value:
			'Nos adhérents pourront <b>rédiger</b>, seuls ou à plusieurs, en ligne ou lors d’événements locaux,<b> des propositions structurées grâce à un outil numérique d’intelligence collective innovant</b>, lancé à l’occasion de ce débat.',
		img: adi_img
	},
	{
		timeframe: 'Février - Mars',
		title: 'Co-construction',
		value:
			'<a href="#Workshop">Quatre groupes de travail</a> - un par thématique - sont chargés de <b>construire la contribution finale</b> à partir des diverses propositions de marcheurs et d’auditions qu’ils pourront décider de mener pour éclairer leur travail.',
		img: co_construction_img
	}
];
const Steps = () => {
	return (
		<React.Fragment>
			<div className="steps">
				<div className="l__wrapper--narrow">
					<h4>Comment est-ce que LaREM y participe ?</h4>
					<p className="muted">
						Nous souhaitons que chacun puisse prendre la parole dans le cadre de ce Grand Débat National -
						c’est une opportunité unique de redevenir maîtres de notre destin collectif. C’est pourquoi nous
						encourageons tous les marcheurs à se rendre aux débats organisés près de chez eux ou à en
						organiser. <br />
						<br />
						En parallèle de cette mobilisation nationale, notre mouvement souhaite apporter sa propre
						contribution et donner sa vision pour le pays en un document portant des propositions pour le
						niveau local, national et européen, qui sera remis à l’exécutif au mois de mars. Ces
						propositions, en cohérence avec le projet que nous avons porté jusqu’ici seront co-construites
						avec les marcheurs.
					</p>
					<h6>La participation du mouvement en 3 phases</h6>
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
