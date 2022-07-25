import {useState} from 'react'
import {patientRecord} from '../../services/api'
import { useNavigate } from 'react-router-dom'

const NewPatients = () => {

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [cell, setCell] = useState("")
    const [brithData, setBrithData] = useState("")
    const [sexo, setSexo] = useState("")
    const [cpf, setCpf] = useState("")
    const [rg, setRg] = useState("")
    const [address, setAddress] = useState("")
    const [number, setNumber] = useState("")
    const [district, setDistrict] = useState("")

    const handleSubmit = async (e) => {

        const newpatient = await patientRecord(
            name, 
            email,
            cell,
            brithData,
            sexo,
            cpf,
            rg,
            address,
            number,
            district,
        )

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
                    <label>Nome: </label>
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
                    <label>Email: </label>
                    <input 
                        type="email"
                        value={email}
                        onChange={
                            (e) => setEmail(e.target.value)
                        }>
                    </input>
                </div>
                <br/>
                <div>
                    <label>Celular</label>
                    <input 
                        type="text"
                        value={cell}
                        onChange={
                            (e) => setCell(e.target.value)
                        }>
                    </input>
                </div>
                <br/>
                <div>
                    <label>Data de nascimento: </label>
                    <input 
                        type="date"
                        value={brithData}
                        onChange={
                            (e) => setBrithData(e.target.value)
                        }>
                    </input>
                </div>
                <br/>
                <div>
                    <label>Gênero: </label>
                    <input 
                        type="text"
                        value={sexo}
                        onChange={
                            (e) => setSexo(e.target.value)
                        }>
                    </input>
                </div>
                <br/>
                <div>
                    <label>CPF: </label>
                    <input 
                        type="text"
                        value={cpf}
                        onChange={
                            (e) => setCpf(e.target.value)
                        }>
                    </input>
                </div>
                <br/>
                <div>
                    <label>RG: </label>
                    <input 
                        type="text"
                        value={rg}
                        onChange={
                            (e) => setRg(e.target.value)
                        }>
                    </input>
                </div>
                <br/>
                <div>
                    <label>Endereço: </label>
                    <input 
                        type="text"
                        value={address}
                        onChange={
                            (e) => setAddress(e.target.value)
                        }>
                    </input>
                </div>
                <br/>
                <div>
                    <label>Numero: </label>
                    <input 
                        type="text"
                        value={number}
                        onChange={
                            (e) => setNumber(e.target.value)
                        }>
                    </input>
                </div>
                <br/>
                <div>
                    <label>Bairro: </label>
                    <input 
                        type="text"
                        value={district}
                        onChange={
                            (e) => setDistrict(e.target.value)
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