import React from 'react';
import Chief from './Chief';
import poirson_img from './../../img/poirson_img.png';
import schiappa_img from './../../img/schiappa_img.png';
import errante_img from './../../img/errante_img.png';
import peyrol_img from './../../img/peyrol_img.png';
const Workshop = () => {
	const chiefs = [
		{
			title: 'Brune POIRSON',
			description: 'Présidente du groupe de travail sur <p class="blue">la transition écologique</p>',
			img: poirson_img,
			url: 'https://youtu.be/YNJl4GZmwTs'
		},
		{
			title: 'Marlène SCHIAPPA',
			description: 'Présidente du groupe de travail sur <p class="blue">la démocratie et la citoyenneté</p>',
			img: schiappa_img,
			url: 'https://youtu.be/hnTvdhbwpg0'
		},
		{
			title: 'Sophie ERRANTE',
			description:
				'Présidente du groupe de travail sur <p class="blue">l’organisation de l’État<br/> et les services publics</p>',
			img: errante_img,
			url: 'https://www.youtube.com/watch?v=GHBBoZIX_Vs'
		},
		{
			title: 'Bénédicte PEYROL',
			description: 'Présidente du groupe de travail sur <p class="blue">la fiscalité et la dépense publique</p>',
			img: peyrol_img,
			url: 'https://youtu.be/hTQZ1iS0dX8'
		}
	];
	return (
		<div className="workshop" id="Workshop">
			<h4>Les groupes de travail</h4>
			<div className="l__wrapper--narrow">
				<p>
					Les groupes de travail de <em>La République En Marche</em> sont présidés par <strong>4 personnalités politiques
					d’envergure qui s’assureront</strong> que le débat soit le plus ouvert et transparent possible, et <strong>que nos
					propositions soient aussi ambitieuses que notre mouvement</strong>. Ces groupes remettront la contribution du
					mouvement au Gouvernement sur la base des propositions de marcheurs.
					<br />
				</p>
				<br />
				<p>Vous souhaitez en apprendre davantage sur les différents groupes de travail, regardez les présidentes en parler :</p>
			</div>

			<div className="chiefs">
				{chiefs.map(chief => (
						<Chief key={chief.title} url={chief.url} title={chief.title} description={chief.description} img={chief.img} />
				))}
			</div>
			<p className="small">
				Chacun de ces groupes de travail est composé d’une quinzaine de membres parmi lesquels des députés, des
				sénateurs, des élus locaux, des membres du Bureau Exécutif de LaREM, des référents, des Jeunes Avec Macron, des
				adhérents, des personnalités qualifiées. Ces derniers auditionneront de nombreuses
				personnalités qualifiées (adhérents, élus, administration, syndicats, associations, entreprises et think-tanks) pour éclairer leur travail.
			</p>
		</div>
	);
};

export default Workshop;
