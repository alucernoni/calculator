import "./Screen.css"
import React from "react"
import {Textfit} from "react-textfit"

function Screen() {
    return (
        <Textfit className="screen" mode="single" max={70}>

        </Textfit>
    )
}

export default Screen