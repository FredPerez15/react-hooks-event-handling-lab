import React from "react";

const EyesOnMe = () => {
    const handleOnFocus = () => {
        console.log('Good!')
    }

    const handleOnBlur = () => {
        console.log('Hey! Eyes on me!')
    }
    return(
        <div>
            <button onFocus={handleOnFocus} onBlur={handleOnBlur}>Eyes on me</button>

        </div>
    )
}

export default EyesOnMe;