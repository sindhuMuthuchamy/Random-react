import { useState } from "react"
import FormResult from "./formresult"

function FormOpj(){
    const [fNum,setfnum] = useState("")
    const [lNum,setlnum] = useState("")
    const [result,setResult] = useState("")

    const handlefnum=(event)=>{
        setfnum(event.target.value)
    }
    const handlelnum=(event)=>{
        setlnum(event.target.value)
    }
    const handleResult=(event)=>{
        event.preventDefault()
        const sum= parseFloat(fNum) + parseFloat(lNum)
        setResult(sum)
    }
    return(
        <>
       <form className="form">
       <h1>Addition</h1>
        <label htmlFor="fnum">First Number</label>
        <input id="fnum"value={fNum} onChange={handlefnum}></input><br/>
        <label htmlFor="lnum">Second Number</label>
        <input id="lnum" value={lNum} onChange={handlelnum}></input><br/>
        <button onClick={handleResult} >Add</button>
       </form>
        {/* <h3 className="form-result">{result}</h3> */}
        <FormResult result={result}/>
        </>
    )
}

export default FormOpj