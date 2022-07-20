import React, { useState, useEffect } from "react"


const PatientsInformation = () => {

    const [information, setInformation] = useState([])

    useEffect(() => {
		const storageInformation = localStorage.getItem('patient')
		if (storageInformation) {
			setInformation(JSON.parse(storageInformation))
		}
	}, [])
    console.log(information)
    return (
        <div>
            <h1>Informação do Pacientes</h1>
            <p>Nome do paciente: {information.name}</p>
            <br/>
            <p>Email do paciente: {information.email}</p>
            <br/>
            <p>ID da Clinica: {information.user}</p>
            <br/>
            <p>ID do paciente: {information._id}</p>
        </div>
    )
}
export default PatientsInformation