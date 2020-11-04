import React from "react";

const UserPage = (props) => {

    let modifyLoginRef = React.createRef()

    let handleChanges = (id, newLogin) => {
        props.saveChanges(id, newLogin)
    }

    return <div>
        {props.listOfUsers.map(user => {
            return <div key={user.id}>
                {user.editMode ? <div>
                    <input ref={modifyLoginRef} type="text"/>
                </div> :
                    <div>
                    <div>{user.id}</div>
                    <div>{user.login}</div>
                </div>}
                { !user.editMode ? <div>{user.id  ? <div>
                    <button onClick={() => props.deleteUser(user.id)}>delete this</button>
                    <button onClick={() => props.enterEditMode(user.id)}>modify this</button>
                </div> : null}</div> : <button onClick={() => handleChanges(user.id, modifyLoginRef.current.value)}>save this</button>}
            </div>
        })}
    </div>
}

export default UserPage