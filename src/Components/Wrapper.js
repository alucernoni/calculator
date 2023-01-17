import "./Wrapper.css"
import React from "react"
import Screen from "./Screen"
import ButtonBox from "./ButtonBox"

function Wrapper() {
    return (
    <div className="wrapper">
        <Screen value="0"/>
        <ButtonBox/>
    </div>
    )
}

export default Wrapper