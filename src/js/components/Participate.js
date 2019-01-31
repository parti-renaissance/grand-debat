import React from 'react';
import adi_preview from './../../img/adi_preview.png';
const Participate = () => {
	return (
		<div className="participate l__wrapper--narrow">
			<h4>L'Atelier des idées c’est quoi ?</h4>
			<p>
				L'Atelier des idées sera lancé début février. C’est un outil numérique d’intelligence collective, qui sera accessible à tous nos adhérents. Un principe simple : identifiez une problématique et proposez une solution pour y répondre. Une fois publiée, votre proposition devient accessible à l’ensemble des marcheurs qui pourront l’enrichir, la commenter, la soutenir.
			</p>
			<div className="participate__grid">
				<div>
					<div>
						<img src={adi_preview} alt="atelier des idées" />
						<div style={{ textAlign: 'center' }}>
							<button type="button" disabled>
								atelier des idées
							</button>
							<small>Disponible début février 2019</small>
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
