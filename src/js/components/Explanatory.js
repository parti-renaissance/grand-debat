import React from 'react';

const Explanatory = () => {
	const phases = [
		'La transition écologique au quotidien',
		'La fiscalité et les dépenses publiques',
		'La démocratie et la citoyenneté',
		'L’organisation de l’État et des services publiques'
	];

	return (
		<div className="explanatory">
			<h4>C'est quoi le Grand Débat National ?</h4>
			<p className="muted">
				Dans le contexte de la mobilisation dite « des gilets jaunes », le Grand Débat National a été annoncé en
				décembre par le Président de la République et le Gouvernement pour prendre les contributions des
				Françaises et des Français sur <strong>quatre grandes thématiques</strong> liées à nos institutions et nos politiques
				publiques.{' '}
				<a href="https://granddebat.fr/" target="_blank" rel="noopener noreferrer">
					<em>En savoir plus</em>
				</a>.
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
		</div>
	);
};

export default Explanatory;
