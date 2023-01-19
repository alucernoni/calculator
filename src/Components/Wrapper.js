import "./Wrapper.css"
import React, {useState} from "react"
import Screen from "./Screen"
import ButtonBox from "./ButtonBox"

function Wrapper() {

    let [calc, setCalc] = useState({
        sign: "",
        num: 0,
        res: 0
    })

    function clearScreenHandler() {
        setCalc({
            ...calc,
            sign: "",
            num: 0,
            res: 0
        })
    }

    function inversionHandler() {
        setCalc({
            ...calc,
            sign: "",
            num: calc.num ? calc.num * -1 : 0,
            res: calc.res ? calc.res * -1 : 0
        })
        // return (calc.sign === "" ? calc.sign = "-" : "")
    }

    function percentHandler() {

    }

    function equalsHandler() {

    }

    function decimalHandler() {
        
    }

    function signHandler() {

    }

    function numHandler(e) {

    }


    return (
    <div className="wrapper">
        <Screen value={calc.num ? calc.num : calc.res} />
        <ButtonBox 
            clearScreenHandler={clearScreenHandler} 
            inversionHandler={inversionHandler} 
            percentHandler={percentHandler} 
            equalsHandler={equalsHandler} 
            decimalHandler={decimalHandler}
            signHandler={signHandler}
            numHandler={numHandler}
        />
    </div>
    )
}

export default Wrapper