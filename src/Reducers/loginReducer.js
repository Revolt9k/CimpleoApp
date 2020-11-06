const SET_LOGIN = 'setLogin'
const SET_PASSWORD = 'setPassword'
const GET_LOGINED = 'getLogined'
const HANDLE_REGISTRATION_MODE = 'handleRegistrationMode'
const REGISTER_NEW_USER = 'registerNewUser'

const initialState = {
    login: "",
    password: "",
    isLogined: false,
    registeredUsers: [],
    registrationMode: false,
    isNewUserRegistered: false,
}

const LoginReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_LOGIN: {
            return {
                ...state,
                login: action.login,
            }
        }
        case SET_PASSWORD: {
            return {
                ...state,
                password: action.password,
            }
        }
        case GET_LOGINED: {
            if (state.registeredUsers.find(item => (item.login === state.login) && (item.password === state.password))) {
                return {
                    ...state,
                    isLogined: true
                }
            } else {
                alert("incorrect login or pass")
                return state
            }
        }
        case HANDLE_REGISTRATION_MODE: {
            return {
                ...state,
                registrationMode: !state.registrationMode
            }
        }
        case REGISTER_NEW_USER: {
            let newUser = {
                id: state.registeredUsers.length + 1,
                login: action.login,
                password: action.password,
            }
            return {
                ...state,
                registeredUsers: [...state.registeredUsers, newUser],
                isNewUserRegistered: true,
            }
        }
        default :
            return state;
    }

}

export const setLogin = (login) => ({type: SET_LOGIN, login})

export const setPassword = (password) => ({type: SET_PASSWORD, password})

export const getLogined = () => ({type: GET_LOGINED,})

export const handleRegistrationMode = () => ({type: HANDLE_REGISTRATION_MODE,})

export const registerNewUser = (login, password) => ({type: REGISTER_NEW_USER, login, password})


export default LoginReducer