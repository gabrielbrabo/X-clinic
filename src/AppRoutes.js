import React, { useContext} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom"
import { AuthProvider, AuthContext } from './contexts/auth'
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import Patients from "./pages/Patients"
import NewPatient from "./pages/NewPatient"

const AppRoutes = () => {

    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext)
    
        if(loading) {
          return <div className='loading'>Carregando...</div>
        }
    
        if( !authenticated ) {
          return <Navigate to="/login" />
        }
    
        return children
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>}/>
                    <Route exact path="/" element={
                        <Private>
                            <HomePage/>
                        </Private>
                    }/>
                    <Route exact path="/patients" element={
                        <Private>
                            <Patients/>
                        </Private>
                    }/>
                    <Route exact path="/new/patient" element={
                        <Private>
                            <NewPatient/>
                        </Private>
                    }/>
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes