import './auth.css'
import Button from '../../components/general/Button'
import Login from './Login'
import Register from './Register';
import { useState } from 'react';

function Authentication({ setIsLoggedIn, setUserUsername }) {

    const [_switch, set_switch] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return (
        <form>
            <Button
                label="Sign In"
                onClick={() => set_switch(true)}
            />

            <Button
                label="Sign Up"
                onClick={() => set_switch(false)}
            />
            {_switch ? (
                <Login
                    username={username}
                    password={password}
                    setUsername={setUsername}
                    setPassword={setPassword}
                />
            ) : (
                <Register
                    username={username}
                    password={password}
                    setUsername={setUsername}
                    setPassword={setPassword}
                />
            )}
        </form>

    )
}

export default Authentication