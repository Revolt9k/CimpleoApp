import React from "react";
import TableHeader from "../TableHeader";
import css from "../Table.module.css";
import TableItem from "../TableItem";
import TableItemEditMode from "../TableItemEditMode";

const UserPage = (props) => {
    return <div className={css.wrapper}>
        <TableHeader nameOfCol={"Login"}/>
        {props.listOfUsers.map(user => {
            return <div key={user.id}> {user.id ?
                <div className={css.item_wrapper}>
                    {!user.editMode ?
                        <TableItem item={user}
                                   enterEditMode={props.enterUserEditMode}
                                   deleteSensor={props.deleteUser}/>
                        : <TableItemEditMode item={user}
                                             saveChanges={props.saveUserChanges}
                                             leaveEditMode={props.leaveUserEditMode}/>}
                </div> : null}
            </div>
        })}
    </div>
}

export default UserPage