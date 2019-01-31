import React from 'react';

const Explanatory = () => {
	const phases = [
		'La transition écologique au quotidien',
		'La fiscalité et les dépenses publiques',
		'La démocratie et la citoyenneté',
		'L’organisation de l’État et des services publics'
	];

	return (
		<div className="explanatory">
			<h4>C'est quoi le Grand Débat National ?</h4>
			<p className="muted">
				Le Grand Débat National a été lancé en
				décembre par le Président de la République et le Gouvernement. Le but ? Permettre à tous les Français de débattre des questions essentielles qui régissent nos vies, à savoir :
			</p>
			<div className="explanatory__phases">
				<div>
					{phases.map((phase, i) => (
						<div key={i}>
							<span> {i + 1} </span> <p className="phase--name">{phase}</p>
						</div>
					))}
				</div>
			</div>
			<p className="muted">
				Ce débat, qui a pour ambition d'intégrer tous les citoyens et de déboucher sur des propositions concrètes de politiques publiques, a commencé le 15 janvier. Il se clôturera le 15 mars et un synthèse en sera rendue par l’exécutif en avril 2019.
			</p>
			<p className="muted strong">
				Ce débat est un moment historique pour notre pays, une opportunité pour réinventer la démocratie et construire l'avenir ensemble. À nous de nous en saisir.
			</p>
		</div>
	);
};

export default Explanatory;
