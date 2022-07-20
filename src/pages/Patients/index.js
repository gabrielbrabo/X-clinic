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

    const Patient = (id) => {
        navigate('/information/patient')
        console.log(id)
	}
    return (
        <div>
            <h1>Pacientes</h1>
            <button onClick={handlenewpatients}>Novo Paciente</button>
            <div>
                {
                   patient.map(patients => (
                    <div 
                        onClick={() => 
                            Patient(patients._id)
                        } 
                        key={patients._id}
                    >
                        {patients.name}
                    </div>
                   ))
                }
			</div>
        </div>
    )
}

export default Patients