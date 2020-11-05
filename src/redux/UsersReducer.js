let initialState = {
    login: "",
    password: "",
    isLogined: false,
    registeredUsers: [
        {id: 1, login: "user1", password: "pass1", editMode: false},
        {id: 2, login: "user2", password: "pass2", editMode: false},
        {id: 3, login: "user3", password: "pass3", editMode: false},
        {id: 4, login: "user4", password: "pass4", editMode: false},
        {id: 5, login: "user5", password: "pass5", editMode: false},
        {id: 6, login: "user6", password: "pass6", editMode: false},
        {id: 7, login: "user7", password: "pass7", editMode: false},
        {id: 8, login: "user8", password: "pass8", editMode: false},
    ],
    registrationMode: false,
    isNewUserRegistered: false,
}

const SET_LOGIN = 'setLogin'
const SET_PASSWORD = 'setPassword'
const GET_LOGINED = 'getLogined'
const HANDLE_REGISTRATION_MODE = 'handleRegistrationMode'
const REGISTER_NEW_USER = 'registerNewUser'
const DELETE_USER = 'deleteUser'
const ENTER_EDIT_MODE = 'enterEditMode'
const SAVE_CHANGES = 'saveChanges'

const usersReducer = (state = initialState, action) => {

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
                id: state.registeredUsers.length+1,
                login: action.login,
                password: action.password,
            }
            return {
                ...state,
                registeredUsers: [...state.registeredUsers, newUser],
                isNewUserRegistered: true,
            }
        }
        case DELETE_USER: {
            return {
                ...state,
                registeredUsers: state.registeredUsers
                    .slice(0, action.id - 1)
                    .concat(" ")
                    .concat(state.registeredUsers.slice(action.id, state.registeredUsers.length+1))
            }
        }
        case ENTER_EDIT_MODE: {
            return {
                ...state,
                registeredUsers: [
                    ...state.registeredUsers.map(user => {
                        if (user.id === action.id) {
                            user.editMode = true
                        } return user
                    })
                ],

            }
        }
        case SAVE_CHANGES: {
            return {
                ...state,
                registeredUsers: [
                    ...state.registeredUsers.map(user => {
                        if (user.id === action.id) {
                            user.editMode = false
                            user.login = action.newlogin
                        } return user
                    })
                ],

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

export const deleteUser = (id) => ({type: DELETE_USER, id})

export const enterEditMode = (id) => ({type: ENTER_EDIT_MODE, id})

export const saveChanges = (id, newlogin) => ({type: SAVE_CHANGES, id, newlogin})


export default usersReducer