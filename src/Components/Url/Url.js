import React from 'react'
import './Url.css'
import 'tachyons'

const Url = ({onInputChange, onSubmit}) => {
	return (
		<div className='background'>
			<p className='f4 solid'>Enter the image link to detect a face</p>
			<div className='inner-background dib w-40 ba'>
				<input className='bg-light-yellow ma3 w-70' type= 'text' placeholder='Enter the URL' onChange={onInputChange}></input>
				<button className='bg-light-yellow mr3 w3 tc' onClick = {onSubmit}>Detect</button>
			</div>
		</div>
	);
}


export default Url;