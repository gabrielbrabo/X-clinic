import React, {useState, useEffect} from 'react'
import {getpatients} from '../../services/api'

const Patients = () => {

    const [patient, setPatient] = useState([])

    useEffect(() => {
        const response = getpatients()
        setPatient(response)
        
	}, [])
    console.log(patient)
    return (
        <div>
            <h1>pacientes</h1>
            <ul>
                
			</ul>
        </div>
    )
}

export default Patients