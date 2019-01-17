import React from 'react';

const Chief = props => (
	<div className="chief">
		<a href={props.url} target="_blank">
			<img src={props.img} alt="photographie de la présidente" />
		</a>
		<p>{props.title}</p>
		<p className="muted" dangerouslySetInnerHTML={{ __html: props.description }} />
	</div>
);

export default Chief;
