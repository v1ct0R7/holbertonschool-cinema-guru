import './auth.css'
import Input from '../../components/general/Input'
import Button from  '../../components/general/Button'

function Register ({username, password, setUsername, setPassword}) {
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <>
            <Input 
            label = "Username"
            type = "text"
            value = {username}
            setValue = {setUsername}
            />

            <Input 
            label = "Password"
            type = "password"
            value = {password}
            setValue = {setPassword}
            />

            <Button 
            label = "Register"
            onClick = {handleSubmit}
            />

        </>
    )
}

export default Register
