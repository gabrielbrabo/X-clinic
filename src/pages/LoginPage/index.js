import {
    Container,
    Formulario,
    LoginUser,
    Submit,
    Button,
    Email,
    Password,
} from './styled'
import {useState, useContext} from 'react'
import { AuthContext, } from '../../contexts/auth'

const LoginPage = () => {

    const {login} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        login(email, password)
    }

    return (
        <Container>
            <h1>Login</h1>     
            <Formulario onSubmit={handleSubmit}>
                <Email>
                    <label>Email</label>
                    <LoginUser 
                        type="text"
                        value={email}
                        onChange={
                            (e) => setEmail(e.target.value)
                        }
                    />
                </Email>
                <br/>
                <Password>
                    <label>Senha</label>
                    <LoginUser
                        type="password"
                        value={password}
                        onChange={
                            (e) => setPassword(e.target.value)
                        }
                    />
                </Password>
                <br/>
                <Submit>
                    <Button type='submit'>
                        Entrar
                    </Button>
                </Submit>
            </Formulario>
      </Container>
    )
}

export default LoginPage