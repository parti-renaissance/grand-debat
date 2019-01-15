import React from 'react';

const Explanatory = () => {
	const phases = [
		'Comment finance-t-on la transition écologique : par l’impôt, par les taxes ? et qui doit être concerné en priorité ?',
		'Comment rendre notre fiscalité plus juste, plus efficace, plus compétitive et plus lisible ?',
		'Comment faire évoluer la pratique de la démocratie et de la citoyenneté ?',
		'Comment faire évoluer l’organisation de l’État et des services publiques pour les rendre plus proches des Français et plus efficaces ?'
	];

	return (
		<div className="explanatory">
			<h4>C'est quoi le grand débat National ?</h4>
			<p className="muted">
				Dans le contexte de la mobilisation dite « des gilets jaunes », Le Grand Débat national a été lancé fin
				décembre par le président de la République et le Gouvernement pour prendre les contributions des 4
				grandes thématiques liées à nos institutions et nos politiques publiques. <em>Lire plus…</em>
			</p>
			<div>
				<div>
					{phases.map((phase, i) => (
						<div>
							<span> {i + 1} </span> <p>{phase}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Explanatory;
