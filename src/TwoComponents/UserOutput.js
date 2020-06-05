import React from "react"

import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className="StyleSheets">
            <p>Hello, my name is {props.username}, I have been studying to be a software engineer for a year now.</p>
            <p>{props.username} is passionate for video games and technology and coding.</p>
        </div>
    )
}

export default UserOutput