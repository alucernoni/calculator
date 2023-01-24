import "./Wrapper.css"
import React, {useState} from "react"
import Screen from "./Screen"
import ButtonBox from "./ButtonBox"

function Wrapper() {

    let [calc, setCalc] = useState({
        sign: "",
        num: [],
        res: 0
    })

    function clearScreenHandler() {
        setCalc({
            ...calc,
            sign: "",
            num: [],
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
    }

    function percentHandler() {
        setCalc({
            ...calc,
            sign: "",
            num: calc.num ? calc.num * .01 : 0,
            res: calc.res ? calc.res * .01 : 0
        })
    }

    function equalsHandler() {

    }

    function decimalHandler() {
        
    }

    function signHandler(e) {
        e.preventDefault()
        console.log(e)
    }

    function numHandler(e) {
        e.preventDefault()
        console.log(e)
        // setCalc({
        //     ...calc,
        //     num: calc.num === "0" ? calc.num = number : calc.num = []
        // })
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