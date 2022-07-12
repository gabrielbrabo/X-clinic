import React, {useState, useEffect, createContext} from 'react'
import {api, createSession } from '../services/api'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = sessionStorage.getItem("user")
        const token = sessionStorage.getItem('token')

        if(recoveredUser && token) {
            setUser(JSON.parse(recoveredUser))
            api.defaults.headers.Authorization = `Bearer ${token}`
        }

        setLoading(false)
    }, [])

    const login = async (email, password) => {

        const response = await createSession(email, password)

        const loggedUser = response.data.user
        const token = response.data.token
        sessionStorage.setItem("user", 
        JSON.stringify(loggedUser))
        sessionStorage.setItem("token", token)
        
        api.defaults.headers.Authorization = `Bearer ${token}`
        setUser(loggedUser)
        navigate('/')
    }
    
    const logout = () => {

        console.log("logout")
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        api.defaults.headers.Authorization = null
        setUser(null)
        navigate('/login')

    }

    return (
        <AuthContext.Provider 
            value={
                {
                    authenticated: !!user, 
                    user,
                    loading,
                    login,
                    logout
                }
            }
        >
            {children}
            
        </AuthContext.Provider>
    )
}