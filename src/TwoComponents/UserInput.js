import React from 'react'

const UserInput = (props) => {

    const inLineStyling = {
        border: '2px solid red'
    }
    
    return (
        <div>
            <form>
                <label>
                    <input 
                    type="text" 
                    onChange={props.change} 
                    value={props.username}
                    style={inLineStyling}
                    />
                </label>
                
            </form>
        </div>
    )
}

export default UserInput