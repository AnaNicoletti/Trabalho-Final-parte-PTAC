import React from 'react'
import { Link } from 'react-router-dom';
import { FacebookLogo,  TwitterLogo, InstagramLogo  } from 'phosphor-react'

import './MenuHorizontal.css'

function MenuHorizontal() {
	return (
		<div className='horizontal-container'>
    
      <Link to='/' className="menu">
        <b>Menu</b>
	    </Link>

      <Link to='/' className= 'img'>
			  <img src='src/img1.png'/>
      </Link>

      <Link to='/' className="icons">
				<FacebookLogo color="darkblue" weight="light" size={25}/>
	    </Link>
			
      <Link to='/' className="icons">
				<InstagramLogo color="darkred" weight="light" size={25}/>
      </Link>

      <Link to='/' className="icons">
				<TwitterLogo color="blue" weight="light" size={25}/>
	    </Link>
    
		</div>
	)
}

export default MenuHorizontal;