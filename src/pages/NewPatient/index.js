import {useState} from 'react'
import {patientRecord} from '../../services/api'
import { useNavigate } from 'react-router-dom'

const NewPatients = () => {

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = async (e) => {

        const newpatient = await patientRecord(name, email)

        if(newpatient.status === 200) {
            alert('Paciente cadastrado com sucesso.')
            navigate('/patients')
        }
    }
    
    return (
        <div>
            <h1>Cadastro de Paciente</h1>
            <form>
                <div>
                    <label>Nome</label>
                    <input 
                        type="text"
                        value={name}
                        onChange={
                            (e) => setName(e.target.value)
                        }>
                    </input>
                </div>
                <br/>
                <div>
                    <label>Email</label>
                    <input 
                        type="text"
                        value={email}
                        onChange={
                            (e) => setEmail(e.target.value)
                        }>
                    </input>
                </div>
                <br/>
            </form>
            <button onClick={handleSubmit}>Cadastra Paciente</button>
        </div>
    )

}

export default NewPatients