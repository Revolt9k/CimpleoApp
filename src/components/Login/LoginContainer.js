import LoginPage from "./LoginPage";
import React from "react";
import {connect} from "react-redux";
import {setLogin, setPassword, getLogined, handleRegistrationMode, registerNewUser} from "../../redux/LoginReducer";


class LoginContainer extends React.Component {

    render() {
        return (
          <LoginPage login={this.props.login}
                     password={this.props.password}
                     setLogin={this.props.setLogin}
                     setPassword={this.props.setPassword}
                     getLogined={this.props.getLogined}
                     registrationMode={this.props.registrationMode}
                     handleRegistrationMode={this.props.handleRegistrationMode}
                     registerNewUser={this.props.registerNewUser}
                     isLogined={this.props.isLogined}
                     isNewUserRegistered={this.props.isNewUserRegistered}

          />
        );
    }
}


let mapStateToProps = (state) => ({
    login: state.login.login,
    password: state.login.password,
    registrationMode: state.login.registrationMode,
    isLogined: state.login.isLogined,
    isNewUserRegistered: state.login.isNewUserRegistered,
})

export default connect(mapStateToProps, {setLogin, setPassword, getLogined, handleRegistrationMode, registerNewUser})(LoginContainer)