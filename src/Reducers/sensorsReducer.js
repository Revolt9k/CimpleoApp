let initialState = {
    registeredSensors: [
        {id: 1, degree: "12", editMode: false},
        {id: 2, degree: "08", editMode: false},
        {id: 3, degree: "95", editMode: false},
        {id: 4, degree: "02", editMode: false},
        {id: 5, degree: "17", editMode: false},
    ],
}

const DELETE_SENSOR = 'deleteSensor'
const ENTER_SENSOR_EDIT_MODE = 'enterSensorEditMode'
const LEAVE_SENSOR_EDIT_MODE = 'leaveSensorEditMode'
const SAVE_SENSOR_CHANGES = 'saveSensorChanges'

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
        case ENTER_SENSOR_EDIT_MODE: {
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
        case LEAVE_SENSOR_EDIT_MODE: {
            return {
                ...state,
                registeredSensors: [
                    ...state.registeredSensors.map(sensor => {
                        if (sensor.id === action.id) {
                            sensor.editMode = false
                        } return sensor
                    })
                ],
            }
        }

        case SAVE_SENSOR_CHANGES: {
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

export const enterSensorEditMode = (id) => ({type: ENTER_SENSOR_EDIT_MODE, id})

export const leaveSensorEditMode = (id) => ({type: LEAVE_SENSOR_EDIT_MODE, id})

export const saveSensorChanges = (id, newdegree) => ({type: SAVE_SENSOR_CHANGES, id, newdegree})


export default SensorsPageReducer