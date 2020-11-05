import LoginPage from "./LoginPage";
import React from "react";
import {connect} from "react-redux";
import {setLogin, setPassword, getLogined, handleRegistrationMode, registerNewUser} from "../../redux/UsersReducer";


class LoginContainer extends React.Component {

    render() {
        return (
          <LoginPage />
        );
    }
}


let mapStateToProps = (state) => ({
    login: state.users.login,
    password: state.users.password,
    registrationMode: state.users.registrationMode,
    isLogined: state.users.isLogined,
    isNewUserRegistered: state.users.isNewUserRegistered,
})

export default connect(mapStateToProps, {setLogin, setPassword, getLogined, handleRegistrationMode, registerNewUser})(LoginPage)