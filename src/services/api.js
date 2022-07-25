import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:5000',
})

export const createSession = async (email, password) => {
    
    return api.post('/sessions', {
        email, password
    })
    .catch((error) => {
        if (error) {
            const resultado = JSON.stringify(
                error.response.data.msg
            )
            alert(resultado)
        }
    }, [])
}

export const patientRecord = async (
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
) => {
    return api.post('/cadastro/patients', {
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
    })
}

export const getpatients = async () => {
    return api.get('/patients')
}