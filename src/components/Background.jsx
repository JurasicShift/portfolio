import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Background.css';

function Background(props) {
	const { pathname } = useLocation();
	let [locationBool, setLocationBool] = useState(false);

	let background__animate = {
		animation: 'bgSlide 1s',
	};

	useEffect(() => {
		if (pathname == '/') setLocationBool((locationBool = true));
	});

	return (
		<div
			className="background"
			style={locationBool ? background__animate : null}
		>
		</div>
	);
}

Background.propTypes = {
	previousPath: PropTypes.string,
};

export default Background;
