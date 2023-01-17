import "./ButtonBox.css"
import React from "react"
import Button from "./Button"

function ButtonBox() {

    const buttonValues = [
        ["C", "+/-", "%", "/"],
        [7, 8, 9, "X"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="]
    ]

    return (
        <div className="buttonbox">
            {
                buttonValues.flat().map((btn, i) => {
                    return (
                        <Button
                            key={i}
                            className={btn === "=" ? "equals" : ""}
                            value={btn}
                            onClick={() => {
                                console.log(`${btn} clicked!`)
                            }}
                        />
                    )
                })
            }
            {/* <Button/> */}
        </div>
    )
}

export default ButtonBox