import React from 'react';
const Participate = () => {
	return (
		<div className="participate l__wrapper--narrow">
			<h4>L'Atelier des idées c'est quoi ?</h4>
			<div className="participate__grid">
				<div>
					<p>
						<strong><a href="https://en-marche.fr/atelier-des-idees" target="_blank" rel="noopener noreferrer">L'Atelier des idées</a> est un outil numérique d’intelligence collective accessible à tous nos adhérents.</strong> Un principe simple : identifiez une problématique et proposez une solution pour y répondre. Une fois publiée, votre proposition devient accessible à l’ensemble des marcheurs qui pourront l’enrichir, la commenter, la soutenir.
					</p>
				</div>
				<div>
					<div>
						<iframe title="Vidéo Atelier des idées" width="560" height="315" src="https://www.youtube.com/embed/rpAyCwye3ok" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
