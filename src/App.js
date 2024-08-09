import { useState } from "react"
import FormOpj from "./components/form"
function App(){

const [fName,setfname] = useState("")
const [lName,setlname] = useState("")
const [result,setResult] = useState("")

const handleFname=(event)=>{
  setfname(event.target.value)
}
const handleLname=(event)=>{
  setlname(event.target.value)
}
const handleResult =(event)=>{
  event.preventDefault()
  setResult(fName + " "+ lName)
}


  return(
    <>
    <form className="app">
    <h1>Form</h1>
      <label htmlFor="fname">First Name</label>
      <input id="fname" value={fName} onChange={handleFname}></input><br/>
      <label htmlFor="lname">Last Name</label>
      <input id="lname" value={lName} onChange={handleLname}></input><br/>
      <input type="submit" onClick={handleResult}></input>
    </form>
    <h3 className="app-result">{result}</h3>

    <FormOpj/>
    </>
  )
}

export default App