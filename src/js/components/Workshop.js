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
			description: 'Présidente du groupe de travail<br/> sur <span class="blue">la vie quotidienne</span>',
			img: poirson_img
		},
		{
			title: 'Marlène SCHIAPPA',
			description:
				'Présidente du groupe de travail<br/> sur <span class="blue">la démocratie et la <br/>citoyenneté</span>',
			img: schiappa_img
		},
		{
			title: 'Sophie ERRANTE',
			description:
				'Présidente du groupe de travail<br/> sur <span class="blue">l’organisation de l’État<br/> et les services publics</span>',
			img: errante_img
		},
		{
			title: 'Bénédicte PEYROL',
			description: 'Présidente du groupe de travail <br/>sur <span class="blue">la fiscalité</span>',
			img: peyrol_img
		}
	];
	return (
		<div className="workshop">
			<h4>Les groupes des travail</h4>
			<p>
				Les groupes de travail de La République En Marche seront présidés par quatre personnalités politiques
				d’envergure qui s’assureront que le débat soit le plus ouvert et transparent possible, et que nos
				propositions soient aussi ambitieuses que notre mouvement.
			</p>
			<br />
			<p>Vous souhaitez en apprendre davantage sur les différents groupes de travail </p>
			<p>Nos présidentes sont là pour vous éclairer :</p>
			<div className="chiefs">
				{chiefs.map(chief => (
					<Chief title={chief.title} description={chief.description} img={chief.img} />
				))}
			</div>
			<p className="small">
				Chacun de ces groupes de travail sera composé d’une quinzaine de membres parmi lesquels des députés, des
				sénateurs, des élus locaux, des membres du Bureau Exécutif, des référents, des JAM, des adhérents, des
				membres de cabinet ministériel et des experts. Ces derniers auditionneront de nombreuses personnalités
				qualifiées (adhérents, élus, administration, syndicats, associations, entreprises et Think-Tank) dès les
				prochaines semaines pour éclairer leur travail.
			</p>
		</div>
	);
};

export default Workshop;
