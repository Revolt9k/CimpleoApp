const DELETE_USER = 'deleteUser'
const ENTER_USER_EDIT_MODE = 'enterUserEditMode'
const LEAVE_USER_EDIT_MODE = 'leaveUserEditMode'
const SAVE_USER_CHANGES = 'saveUserChanges'

const initialState = {
    registeredUsers: [
        {id: 1, login: "user 1", editMode: false},
        {id: 2, login: "user 2", editMode: false},
        {id: 3, login: "user 3", editMode: false},
        {id: 4, login: "user 4", editMode: false},
    ],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case DELETE_USER: {
            return {
                ...state,
                registeredUsers: state.registeredUsers
                    .slice(0, action.id - 1)
                    .concat(" ")
                    .concat(state.registeredUsers.slice(action.id, state.registeredUsers.length + 1))
            }
        }
        case ENTER_USER_EDIT_MODE: {
            return {
                ...state,
                registeredUsers: [
                    ...state.registeredUsers.map(user => {
                        if (user.id === action.id) {
                            user.editMode = true
                        }
                        return user
                    })
                ],

            }
        }
        case LEAVE_USER_EDIT_MODE: {
            return {
                ...state,
                registeredUsers: [
                    ...state.registeredUsers.map(user => {
                        if (user.id === action.id) {
                            user.editMode = false
                        }
                        return user
                    })
                ],

            }
        }
        case SAVE_USER_CHANGES: {
            return {
                ...state,
                registeredUsers: [
                    ...state.registeredUsers.map(user => {
                        if (user.id === action.id) {
                            user.editMode = false
                            user.login = action.newlogin
                        }
                        return user
                    })
                ],

            }
        }
        default :
            return state;
    }
}

export const deleteUser = (id) => ({type: DELETE_USER, id})

export const enterUserEditMode = (id) => ({type: ENTER_USER_EDIT_MODE, id})

export const leaveUserEditMode = (id) => ({type: LEAVE_USER_EDIT_MODE, id})

export const saveUserChanges = (id, newlogin) => ({type: SAVE_USER_CHANGES, id, newlogin})


export default usersReducer