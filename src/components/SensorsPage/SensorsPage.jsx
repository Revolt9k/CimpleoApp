import React from "react";
import css from "./Sensor.module.css"

const SensorsPage = (props) => {

    let modifySensorRef = React.createRef()

    let handleChanges = (id, newDegreeValue) => {
        props.saveChanges(id, newDegreeValue)
    }

    return <div className={css.wrapper}>
        {props.listOfSensors.map(sensor => {
            return <div key={sensor.id}>
                {sensor.editMode ? <div>
                        <input ref={modifySensorRef} type="text"/>
                    </div> :
                    <div>
                        <div>{sensor.id}</div>
                        <div>{sensor.degree}</div>
                    </div>}
                { !sensor.editMode ? <div>{sensor.id  ? <div>
                    <button onClick={() => props.deleteSensor(sensor.id)}>delete this</button>
                    <button onClick={() => props.enterEditMode(sensor.id)}>modify this</button>
                </div> : null}</div> : <button onClick={() => handleChanges(sensor.id, modifySensorRef.current.value)}>save this</button>}
            </div>
        })}
    </div>
}

export default SensorsPage