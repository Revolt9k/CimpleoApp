import React from "react";

const RegistrationForm = (props) => {

    let registerLoginRef = React.createRef()
    let registerPasswordRef = React.createRef()

    return <div>
        Registration
        <input type="text" ref={registerLoginRef}/>
        <input type="text" ref={registerPasswordRef}/>
        <button onClick={() => props.handleRegistrationMode()}>move to login</button>
        <button
            onClick={() => props.handleRegister(registerLoginRef.current.value, registerPasswordRef.current.value)}>registration
        </button>
    </div>
}

export default RegistrationForm