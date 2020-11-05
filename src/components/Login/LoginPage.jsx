import React from "react";
import {Redirect} from "react-router-dom";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import css from "./Login.module.css"

const LoginPage = (props) => {

    if (props.isLogined) {
        return <Redirect to={"/main"}/>
    }

    const handleLoginChange = (refValue) => {
        props.setLogin(refValue)
    }

    const handlePasswordChange = (refValue) => {
        props.setPassword(refValue)
    }

    const handleSubmit = () => {
        props.getLogined()
    }

    const handleRegister = (login, password) => {
        props.registerNewUser(login, password)
        props.handleRegistrationMode()
    }

    return <div className={css.wrapper}>
        {!props.registrationMode ?
            <LoginForm handleLoginChange={handleLoginChange}
                       handlePasswordChange={handlePasswordChange}
                       handleSubmit={handleSubmit}
                       handleRegistrationMode={props.handleRegistrationMode}
                       isNewUserRegistered={props.isNewUserRegistered}/> :
            <RegistrationForm handleRegister={handleRegister}
                              handleRegistrationMode={props.handleRegistrationMode}/>
        }
    </div>
}

export default LoginPage