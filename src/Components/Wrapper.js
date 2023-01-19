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
        return (calc.num = 0)
    }

    function inversionHandler() {
        return (calc.sign === "" ? calc.sign = "-" : "")
    }

    function percentHandler() {
        
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