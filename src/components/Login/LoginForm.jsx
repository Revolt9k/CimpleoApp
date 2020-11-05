import React from "react";
import css from "./Login.module.css"
import {Alert, Button} from "react-bootstrap";


const LoginForm = (props) => {

    let loginRef = React.createRef()
    let passwordRef = React.createRef()

    return <div className={css.loginWrapper}>
        Login
        <input ref={loginRef}
               value={props.login}
               onChange={() => props.handleLoginChange(loginRef.current.value)}
               type="text"/>
        Password
        <input ref={passwordRef}
               value={props.password}
               onChange={() => props.handlePasswordChange(passwordRef.current.value)}
               type="password"/>
        <div className={css.buttons}>
            <Button className={css.button + " " + css.button_left}
                    onClick={() => props.handleSubmit()}
                    variant="outline-primary">login</Button>
            <Button className={css.button + " " + css.button_right}
                    onClick={() => props.handleRegistrationMode()}
                    variant="outline-info">registration</Button>
        </div>
        {props.isNewUserRegistered ? <Alert className={css.alert} variant="success">New user Created!</Alert> : null}
    </div>
}

export default LoginForm