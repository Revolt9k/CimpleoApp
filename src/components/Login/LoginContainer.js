import LoginPage from "./LoginPage";
import {connect} from "react-redux";
import {
    setLogin,
    setPassword,
    getLogined,
    handleRegistrationMode,
    registerNewUser
} from "../../Reducers/loginReducer";

let mapStateToProps = (state) => ({
    login: state.login.login,
    password: state.login.password,
    registrationMode: state.login.registrationMode,
    isLogined: state.login.isLogined,
    isNewUserRegistered: state.login.isNewUserRegistered,
})

export default connect(mapStateToProps, {
    setLogin,
    setPassword,
    getLogined,
    handleRegistrationMode,
    registerNewUser
})(LoginPage)