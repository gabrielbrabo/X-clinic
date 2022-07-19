import React, {useState, useEffect} from 'react'
import {getpatients} from '../../services/api'
import { useNavigate } from 'react-router-dom'

const Patients = () => {

    const navigate = useNavigate()
    const [patient, setPatient] = useState([])

    useEffect(() => {
        (async () => {
            const response = await getpatients()
            setPatient(response.data.data.patients)
        })()       
	}, [])

    const handlenewpatients = () => {
		navigate('/new/patient')
	}

    return (
        <div>
            <h1>pacientes</h1>
            <button onClick={handlenewpatients}>Novo Paciente</button>
            <ul>
                {
                   patient.map(patients => (
                    <li key={patients._id}>
                        {patients.email}, {patients._id}
                    </li>
                   ))
                }
			</ul>
        </div>
    )
}

export default Patients