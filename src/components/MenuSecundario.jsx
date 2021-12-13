import React from 'react'
import { Link } from 'react-router-dom';

import './MenuSecundario.css'

function MenuSecundario() {
	return (
		<div className='secundario-container'>
    <div class="secundario">
      <Link to='/' class="linkcolorido">
			  <h3>N<br/>O<br/>T<br/>Í<br/>C<br/>I<br/>A<br/>S<br/><br/>D<br/>A<br/><br/>S<br/>E<br/>M<br/>A<br/>N<br/>A</h3>
      </Link>
      </div>
		</div>
	)
}

export default MenuSecundario;