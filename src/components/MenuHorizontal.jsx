import React from 'react'
import { Link } from 'react-router-dom';

import './MenuHorizontal.css'

function MenuHorizontal() {
	return (
		<div className='horizontal-container'>
    <Link to='/' className= 'img'>
			<img src='src/img1.png' />
      </Link>
		</div>
	)
}

export default MenuHorizontal;