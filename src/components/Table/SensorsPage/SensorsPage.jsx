import React from "react";
import css from "../Table.module.css"
import TableHeader from "../TableHeader";
import TableItem from "../TableItem";
import TableItemEditMode from "../TableItemEditMode";

const SensorsPage = (props) => {

    return <div className={css.wrapper}>
        <TableHeader nameOfCol={"Degree"}/>
        {props.listOfSensors.map(sensor => {
            return <div key={sensor.id}> {sensor.id ?
                <div className={css.item_wrapper}>
                    {!sensor.editMode ?
                        <TableItem item={sensor}
                                   enterEditMode={props.enterSensorEditMode}
                                   deleteSensor={props.deleteSensor}/>
                        : <TableItemEditMode item={sensor}
                                             saveChanges={props.saveSensorChanges}
                                             leaveEditMode={props.leaveSensorEditMode}/>}
                </div> : null}
            </div>
        })}
    </div>
}




export default SensorsPage