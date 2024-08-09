import { useState } from "react"
import "../index.css"

function Random(){

    var [randomNum, setRandom] =useState(0)

    function change(){
        setRandom(
            Math.floor(Math.random()*100 )+1
        )
    }
    function clear() {
        setRandom(0);
    }
    return(
        <div className="container">
            <h3 className="heading">Random Number Generator</h3>
            <h1 className="rnum">{randomNum}</h1>
            <button onClick={change}>Change</button>
            <button onClick={clear}>delete</button>
        </div>

    )
}

export default Random