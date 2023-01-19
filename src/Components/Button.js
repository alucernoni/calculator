import "./Button.css"
import React from "react"

function Button({value, className, handleClicks}) {
    return (
        <button 
        className={className}
        // onClick={handleClicks({value})}
        // onClick={() => {
        //     console.log(`${value} clicked!`)
        // }}
        onClick={handleClicks}
        >
            {value}
        </button>
    )
}


export default Button