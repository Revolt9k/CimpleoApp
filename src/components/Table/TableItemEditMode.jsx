import React from "react";
import css from "./Table.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";

const TableItemEditMode = (props) => {

    let modifyItemRef = React.createRef()
    let handleChanges = (id, newValue) => {
        props.saveChanges(id, newValue)
    }

    return <div className={css.item}>
        <div>{props.item.id}</div>
        <input className={css.input} ref={modifyItemRef} type="text" placeholder={props.item.degree || props.item.login}/>
        <div className={css.buttons}>
            <div className={css.icon}>
                <FontAwesomeIcon icon={faCheck}
                                 size={"lg"}
                                 color="#777"
                                 onClick={() => handleChanges(props.item.id, modifyItemRef.current.value)}/>
            </div>
            <div className={css.icon}>
                <FontAwesomeIcon icon={faTimes}
                                 size={"lg"}
                                 color="#777"
                                 onClick={() => props.leaveEditMode(props.item.id)}/>
            </div>
        </div>
    </div>
}

export default TableItemEditMode