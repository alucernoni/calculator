import "./ButtonBox.css"
import React from "react"
import Button from "./Button"

function ButtonBox({clearScreenHandler, inversionHandler, percentHandler, equalsHandler, decimalHandler, signHandler, numHandler}) {

    const buttonValues = [
        ["C", "+/-", "%", "/"],
        [7, 8, 9, "*"],
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
                            className={btn === "=" ? "equals" : "button"}
                            value={btn}
                            
                            handleClicks={
                                // console.log(`${btn} was clicked!`)}}
                                btn === "C"
                                ? clearScreenHandler
                                : btn === "+/-"
                                ? inversionHandler
                                : btn === "%"
                                ? percentHandler
                                : btn === "="
                                ? equalsHandler
                                : btn === "."
                                ? decimalHandler
                                : btn === "/" || "*" || "+" || "-"
                                ? signHandler
                                : numHandler
                            }
                        />
                    )
                })
            }
            {/* <Button/> */}
        </div>
    )
}

export default ButtonBox