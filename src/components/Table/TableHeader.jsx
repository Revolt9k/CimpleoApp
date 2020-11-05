import css from "./Table.module.css";
import React from "react";

const TableHeader = (props) => {
    return <div className={css.item_wrapper}>
        <div className={css.item}>
            <div className={css.header_text}>Id</div>
            <div className={css.header_text}>{props.nameOfCol}</div>
            <div className={css.invisible}>
            </div>
        </div>
    </div>
}

export default TableHeader