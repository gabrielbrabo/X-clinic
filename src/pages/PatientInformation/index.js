import React, { useState, useEffect } from "react"


const PatientsInformation = () => {

    const [information, setInformation] = useState([])

    useEffect(() => {
		const storageInformation = sessionStorage.getItem('patient')
		if (storageInformation) {
			setInformation(JSON.parse(storageInformation))
		}
	}, [])
    return (
        <div>
            <h1>Informação do Pacientes</h1>
            <p>Nome: {information.name}</p>
            <br/>
            <p>Email: {information.email}</p>
            <br/>
            <p>Celular: {information.cell}</p>
            <br/>
            <p>Data de nascimento: {information.brithData}</p>
            <br/>
            <p>CPF: {information.cpf}</p>
            <br/>
            <p>RG: {information.rg}</p>
            <br/>
            <p>Genêro: {information.sexo}</p>
            <br/>
            <p>Breve diagnostico: {information.diagnosis}</p>
            <br/>
            <p>Endereço: {information.address}</p>
            <br/>
            <p>Numero: {information.number}</p>
            <br/>
            <p>Bairro: {information.district}</p>
            <br/>
            <p>ID do paciente: {information._id}</p>
            <br/>
        </div>
    )
}
export default PatientsInformation