import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import api from '../services/api'

import './NewDetails.css'

function NewDetails() {
	let params = useParams()

	const [noticia, setNoticia] = useState({})

	useEffect(() => {
		api
			.get(`/noticias/visualizar?id=${params.idNoticia}`)
			.then(response => {
				setNoticia(response.data)
			})
			.catch(err => {
				console.log('Deu ruim: ', err)
			})
	}, [])

	return (
		<article>
			<div className="new-container">
				<div className="title1">
          <b>{noticia.titulo}</b>
<br />
					<span className="descricao">{noticia.descricao}</span>
				</div>
<br/>
				<div>
        <span className="author1">
					{noticia.autor}</span>
          <br/>
        <span className="dataPublicacao1">
					{noticia.dataPublicacao}</span>
				</div>
        <br/>
			  <div className="text">
				  {noticia.conteudo}
			  </div>
      </div>
		</article>
	)
}

export default NewDetails