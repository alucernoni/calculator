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
                            
                            handleClicks={(e) => {
                                // console.log(`${btn} was clicked!`)}}
                                // btn === "C"
                                // ? clearScreenHandler
                                // : btn === "+/-"
                                // ? inversionHandler
                                // : btn === "%"
                                // ? percentHandler
                                // : btn === "="
                                // ? equalsHandler
                                // : btn === "."
                                // ? decimalHandler
                                // : btn === "/" || "*" || "+" || "-"
                                // ? signHandler
                                // : numHandler
                                // : btn === "0" || "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9"
                                // ? numHandler
                                switch(btn) {
                                    case "C":
                                        clearScreenHandler()
                                        break;
                                    case "+/-":
                                        inversionHandler()
                                        break;
                                    case "%":
                                        percentHandler()
                                        break;
                                    case "=":
                                        equalsHandler()
                                        break;
                                    case ".":
                                        decimalHandler()
                                        break;
                                    case "/":
                                    case "*":
                                    case "+":
                                    case "-":
                                        signHandler()
                                        break;
                                    default: numHandler(e)
                                }}
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