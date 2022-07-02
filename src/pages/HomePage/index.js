import React, {useState, useEffect, useContext} from 'react'
import {AuthContext} from '../../contexts/auth'

const HomePage = () => {

    const {logout} = useContext(AuthContext)
	const [usuario, setUsuario] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const storageUser = localStorage.getItem('user')
		if (storageUser) {
			setUsuario(JSON.parse(storageUser))
		}
		setLoading(false)
	}, [])

	const handleLogout = () => {
		logout()
	}

	if(loading) {
		
		<div className='loading'>Carregando dados...</div>
		
	}

	return (
		<div>
			<h1>hello word</h1>
			<button onClick={handleLogout}>Sair</button>
			<ul>
				<li>
					{usuario.email}
				</li>
				<li>
					{usuario.id}
				</li>
			</ul>

		</div>
	)
}

export default HomePage