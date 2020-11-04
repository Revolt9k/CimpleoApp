import React from "react";
import {Redirect} from "react-router-dom";

const LoginPage = (props) => {

    if (props.isLogined) {
        return <Redirect to={"/main"}/>
    }

    let loginRef = React.createRef()
    let passwordRef = React.createRef()
    let registerLoginRef = React.createRef()
    let registerPasswordRef = React.createRef()

    const handleLoginChange = () => {
        props.setLogin(loginRef.current.value)
    }

    const handlePasswordChange = () => {
        props.setPassword(passwordRef.current.value)
    }

    const handleSubmit = () => {
        props.getLogined()
    }

    const handleRegister = (login, password) => {
        props.registerNewUser(login, password)
    }

    return <div>
        {!props.registrationMode ? <div>
            <input ref={loginRef} value={props.login} onChange={() => handleLoginChange()} type="text"/>
            <input ref={passwordRef} value={props.password} onChange={() => handlePasswordChange()} type="password"/>
            <button onClick={() => handleSubmit()}>login</button>
            <button onClick={() => props.handleRegistrationMode()}>registration</button>
        </div> :
            <div>
                registrartion mode
                <input type="text" ref={registerLoginRef}/>
                <input type="text" ref={registerPasswordRef}/>
                <button onClick={() => props.handleRegistrationMode()}>move to login</button>
                <button onClick={() => handleRegister(registerLoginRef.current.value, registerPasswordRef.current.value)}>registration</button>
            </div>

        }

    </div>
}

export default LoginPage