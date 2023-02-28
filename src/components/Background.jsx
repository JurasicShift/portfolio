import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Background.css';
import Icons from './Icons';
import useViewport from '../hooks/useViewport';

function Background(props) {
	const { pathname } = useLocation();
	const { width } = useViewport();
	const breakpoint = 1200;

	let [locationBool, setLocationBool] = useState(false);

	let background__animate = {
		animation: 'bgSlide 1s',
	};

	useEffect(() => {
		if (pathname == '/') setLocationBool((locationBool = true));
	});

	return (
		<>
		<div
			className="background"
			style={locationBool ? background__animate : null}
		>
		</div>
		<div className="background__icons">
			{pathname == '/projects' && width < breakpoint ? null : <Icons />}
		</div>
		</>
	);
}

Background.propTypes = {
	previousPath: PropTypes.string,
};

export default Background;
