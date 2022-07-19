import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:5000',
})

export const createSession = async (email, password) => {
    return api.post('/sessions', {
        email, password
    })
}
export const patientRecord = async (name, email) => {
    return api.post('/cadastro/patients', {
        name, email
    })
}

export const getpatients = async () => {
    return api.get('/patients')
}