import React from "react";
import {connect} from "react-redux";
import SensorsPage from "./SensorsPage";
import {deleteSensor, enterEditMode, saveChanges} from "../../redux/SensorsReducer";


class SensorsPageContainer extends React.Component {

    render() {
        return (
          <SensorsPage
              listOfSensors={this.props.listOfSensors}
              enterEditMode={this.props.enterEditMode}
              deleteSensor={this.props.deleteSensor}
              saveChanges={this.props.saveChanges}
          />
        );
    }
}


let mapStateToProps = (state) => ({
    listOfSensors: state.sensors.registeredSensors
})

export default connect(mapStateToProps, {deleteSensor, enterEditMode, saveChanges})(SensorsPageContainer)