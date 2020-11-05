import css from "./Table.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const TableItem = (props) => {

    return <div className={css.item}>
        <div>{props.item.id}</div>
        <div>{props.item.degree||props.item.login}</div>
        <div className={css.buttons}>
            <div className={css.icon}>
                <FontAwesomeIcon icon={faPen}
                                 size={"1x"}
                                 color="#777"
                                 onClick={() => props.enterEditMode(props.item.id)}/>
            </div>
            <div className={css.icon}>
                <FontAwesomeIcon icon={faTrash}
                                 size={"1x"}
                                 color="#777"
                                 onClick={() => props.deleteSensor(props.item.id)}/>
            </div>
        </div>
    </div>
}

export default TableItem