import React from "react";

function Keypad (){
    return (
        <div>
            <input type="password" onChange={() => console.log ('Entering password...')}></input>
        </div>
    )
}

export default Keypad;