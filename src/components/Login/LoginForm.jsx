import React from "react";

const LoginForm = (props) => {
    let loginRef = React.createRef()
    let passwordRef = React.createRef()

    return <div>
        <input ref={loginRef} value={props.login} onChange={() => props.handleLoginChange(loginRef.current.value)} type="text"/>
        <input ref={passwordRef} value={props.password} onChange={() => props.handlePasswordChange(passwordRef.current.value)} type="text"/>
        <button onClick={() => props.handleSubmit()}>login</button>
        <button onClick={() => props.handleRegistrationMode()}>registration</button>
        {props.isNewUserRegistered ? <div>now you can enter with new login and pass</div> : null}
    </div>
}

export default LoginForm