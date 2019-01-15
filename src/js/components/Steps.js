import React from 'react';
const phases = [
	{
		title: 'Sur le terrain',
		value:
			'Nos adhérents seront à l’écoute des citoyens ; sur les marchés, dans la rue, dans leurs immeubles, dans leurs commerces, dans des entreprises, associations et syndicats afin de comprendre ce qui va et ce qui ne va pas et d’aller chercher les bonnes idées chez ceux qui vivent et font les choses.'
	},
	{
		title: "L'Atelier des Idées",
		value:
			'Nos adhérents pourront rédiger, seuls ou à plusieurs, en comité ou au niveau départemental, des propositions structurées grâce à un outil numérique d’intelligence collective innovant, lancé à l’occasion de ce débat. '
	},
	{
		title: 'Co-construction',
		value:
			'Quatre groupes de travail (un par thématique), nommés par Stanislas Guerini, travailleront à la construction de la contribution finale portée à partir des contributions de marcheurs et d’auditions qu’ils pourront décider de mener.'
	}
];
const Steps = () => {
	return (
		<React.Fragment>
			<div className="steps">
				<h5>Comment est-ce que LaREM y participe ?</h5>
				<p className="muted">
					En parallèle de cette organisation nationale, le mouvement La République En Marche et le groupe de
					ses députés à l’Assemblée on tous deux décidé d’apporter une contribution en propre au débat.
				</p>
				<h6>La participation du mouvement en 3 phases</h6>
				<p className="muted">
					Notre mouvement souhaite apporter sa contribution propre et donner sa vision pour le pays en un
					document portant des propositions pour le niveau local, national et européen, qui sera remis à
					l’exécutif au mois de mars. Le Grand Débat La République En Marche se déroulera en trois temps :
				</p>
				<div className="phases">
					{phases.map((phase, i) => (
						<div>
							<span> {i + 1} </span> <h4>{phase.title}</h4>
							<p>{phase.value}</p>
						</div>
					))}
				</div>
				<span className="text--center">
					Dernière étape, les propositions seront validées par un comité de pilotage politique (à définir).
				</span>
			</div>
		</React.Fragment>
	);
};

export default Steps;
