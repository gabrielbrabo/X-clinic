import React, {useState, useEffect} from 'react'
import {getpatients} from '../../services/api'
import { useNavigate } from 'react-router-dom'

const Patients = () => {

    const navigate = useNavigate()
    const [patient, setPatient] = useState([])
    const [busca, setBusca] = useState("")

    useEffect(() => {
        (async () => {
            const response = await getpatients()
            setPatient(response.data.data.patients)
        })()       
	}, [])

    patient.sort(function (a, b) {
        if(a.name < b.name) return -1
        if(a.name > b.name) return 1
        return 0
    })

    const handlenewpatients = () => {
		navigate('/new/patient')
	}

    const Patient = (PatientInformation) => {

        sessionStorage.removeItem('patient')

        sessionStorage.setItem('patient', 
        JSON.stringify(PatientInformation))

        navigate('/information/patient')
	}

    return (
        <div>
            <h1>Pacientes</h1>
            <button onClick={handlenewpatients}>Novo Paciente</button>
            <input 
                type="text" 
                placeholder='Buscar Paciente'
                value={busca} 
                onChange={
                    (e) => setBusca(e.target.value)
                }
            />
            <div>
                {
                   patient.filter((val) => {
                        if(!busca) {
                            return (val)
                        } else if(val.name.includes(busca.toUpperCase())) {
                            return (val)
                        }
                        return null
                   }).map(patients => (
                    <div 
                        onClick={() => 
                            Patient(patients)
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