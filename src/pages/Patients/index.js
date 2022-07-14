import React, {useState, useEffect} from 'react'
import {getpatients} from '../../services/api'

const Patients = () => {

    const [patient, setPatient] = useState([])

    useEffect(() => {
        (async () => {
            const response = await getpatients()
            setPatient(response.data.data.patients)
        })()       
	}, [])
    return (
        <div>
            <h1>pacientes</h1>
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