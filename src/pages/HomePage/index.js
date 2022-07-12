import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {AuthContext} from '../../contexts/auth'

const HomePage = () => {

	const navigate = useNavigate()
    const {logout} = useContext(AuthContext)
	const [usuario, setUsuario] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const storageUser = sessionStorage.getItem('user')
		if (storageUser) {
			setUsuario(JSON.parse(storageUser))
		}
		setLoading(false)
	}, [])

	const handleLogout = () => {
		logout()
	}
	const handlepatients = () => {
		navigate('/patients')
	}

	if(loading) {
		
		<div className='loading'>Carregando dados...</div>
		
	}

	return (
		<div>
			<h1>X-clinic</h1>
			<button onClick={handleLogout}>Sair</button>
			<ul>
				<li>
					{usuario.email}
				</li>
			</ul>
			<button onClick={handlepatients}>Pacientes</button>


		</div>
	)
}

export default HomePage