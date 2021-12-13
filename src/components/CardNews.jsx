import React from 'react'
import { Link } from 'react-router-dom';

import './CardNews.css'

function CardNoticia(props) {
	return (
		<div className="card-container">
			<div>
				<span className="author">{props.autor}</span>
			</div>
			<Link to={props.idNoticia} className="title">
				<h1>{props.titulo}</h1>
			</Link>
        <span className="descricao">{props.descricao}</span>
<br />
        <span className="dataPublicacao">{props.dataPublicacao}</span>
		</div>
	)
}

export default CardNoticia