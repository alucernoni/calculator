import "./Button.css"
import React from "react"

function Button({value, className}) {
    return (
        <button 
        className={className}
        onClick={() => {
            console.log(`${value} clicked!`)
        }}
        >
            {value}
        </button>
    )
}


export default Button