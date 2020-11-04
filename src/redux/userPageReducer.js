let initialState = {
    users: [
        {id:1},
        {id:2}
    ]
}

const SHOW_USERS_PAGE = 'showUsersPage'
const SHOW_SENSORS_PAGE = 'showSensorsPage'

const mainPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_USERS_PAGE: {
            return {
                ...state,
                isUsersPageShown: true,
            }
        }
        case SHOW_SENSORS_PAGE: {
            return {
                ...state,
                isUsersPageShown: false,
            }
        }
        default :
            return state;
    }

}


export const showUsersPage = () => ({type: SHOW_USERS_PAGE, })
export const showSensorsPage = () => ({type: SHOW_SENSORS_PAGE, })


export default mainPageReducer