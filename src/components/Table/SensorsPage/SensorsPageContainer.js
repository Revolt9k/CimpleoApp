import {connect} from "react-redux";
import SensorsPage from "./SensorsPage";
import {
    deleteSensor,
    enterSensorEditMode,
    leaveSensorEditMode,
    saveSensorChanges
} from "../../../Reducers/sensorsReducer";

let mapStateToProps = (state) => ({
    listOfSensors: state.sensors.registeredSensors
})

export default connect(mapStateToProps, {
    deleteSensor,
    enterSensorEditMode,
    leaveSensorEditMode,
    saveSensorChanges
})(SensorsPage)