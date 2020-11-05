import React from "react";
import css from "./Login.module.css";
import {Button} from "react-bootstrap";

const RegistrationForm = (props) => {

    let registerLoginRef = React.createRef()
    let registerPasswordRef = React.createRef()

    return <div className={css.loginWrapper}>
        Enter new login
        <input type="text"
               ref={registerLoginRef}/>
        Enter new password
        <input type="text"
               ref={registerPasswordRef}/>
        <div className={css.buttons}>
            <Button
                className={css.button + " " + css.button_left + " " + css.button_back}
                onClick={() => props.handleRegistrationMode()}
                variant="outline-danger">Back</Button>
            <Button
                className={css.button + " " + css.button_right  + " " + css.button_create}
                onClick={() => props.handleRegister(registerLoginRef.current.value, registerPasswordRef.current.value)}
                variant="outline-success">Create new user</Button>
        </div>
    </div>
}

export default RegistrationForm