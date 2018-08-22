import React from 'react';

const Link = ({active, children, onClick}) => (
	<a href="#"
		onClick={onClick}
		className={active ? 'active' : ''}
	>
		{children}
	</a>
);

export default Link;
