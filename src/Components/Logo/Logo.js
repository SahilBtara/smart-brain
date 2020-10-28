import React from 'react';
import Tilt from 'react-tilt'
import Brain from './brain.png'
import './Logo.css'

const Logo = () => {
	return (
		<div className="ma4 mt8">
			<Tilt className="Tilt pa3 ma3" options={{ max : 25 }} style={{ height: 130, width: 130 }} >
			 <div className="Tilt-inner pa3"> <img alt ='logo' src={Brain} /> </div>
			</Tilt>
		</div>
	);
}

export default Logo;