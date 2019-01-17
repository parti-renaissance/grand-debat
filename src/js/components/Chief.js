import React from 'react';

const Chief = props => (
	<div className="chief">
		<img src={props.img} alt="photograhie de le présidente" />
		<p>{props.title}</p>
		<p className="muted" dangerouslySetInnerHTML={{ __html: props.description }} />
	</div>
);

export default Chief;
