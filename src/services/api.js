import axios from 'axios'

const api = axios.create({
	baseURL: 'https://meuapp.ananicoletti.repl.co'
})

export default api