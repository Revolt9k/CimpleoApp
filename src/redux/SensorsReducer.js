let initialState = {
    registeredSensors: [
        {id: 1, degree: "55", editMode: false},
        {id: 2, degree: "515", editMode: false},
        {id: 3, degree: "535", editMode: false},
        {id: 4, degree: "555", editMode: false},
        {id: 5, degree: "545", editMode: false},
        {id: 6, degree: "525", editMode: false},
        {id: 7, degree: "515", editMode: false},
    ],
}

const DELETE_SENSOR = 'deleteSensor'
const ENTER_EDIT_MODE = 'enterEditMode'
const SAVE_CHANGES = 'saveChanges'

const SensorsPageReducer = (state = initialState, action) => {

    switch (action.type) {

        case DELETE_SENSOR: {
            return {
                ...state,
                registeredSensors: state.registeredSensors
                    .slice(0, action.id - 1)
                    .concat(" ")
                    .concat(state.registeredSensors.slice(action.id, state.registeredSensors.length+1))
            }
        }
        case ENTER_EDIT_MODE: {
            return {
                ...state,
                registeredSensors: [
                    ...state.registeredSensors.map(sensor => {
                        if (sensor.id === action.id) {
                            sensor.editMode = true
                        } return sensor
                    })
                ],

            }
        }
        case SAVE_CHANGES: {
            return {
                ...state,
                registeredSensors: [
                    ...state.registeredSensors.map(sensor => {
                        if (sensor.id === action.id) {
                            sensor.editMode = false
                            sensor.degree = action.newdegree
                        } return sensor
                    })
                ],

            }
        }
        default :
            return state;
    }

}





export const deleteSensor = (id) => ({type: DELETE_SENSOR, id})

export const enterEditMode = (id) => ({type: ENTER_EDIT_MODE, id})

export const saveChanges = (id, newdegree) => ({type: SAVE_CHANGES, id, newdegree})


export default SensorsPageReducer