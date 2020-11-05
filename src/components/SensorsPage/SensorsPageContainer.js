import {connect} from "react-redux";
import SensorsPage from "./SensorsPage";
import {
    deleteSensor,
    enterEditMode,
    saveChanges
} from "../../redux/SensorsReducer";

let mapStateToProps = (state) => ({
    listOfSensors: state.sensors.registeredSensors
})

export default connect(mapStateToProps, {
    deleteSensor,
    enterEditMode,
    saveChanges
})(SensorsPage)