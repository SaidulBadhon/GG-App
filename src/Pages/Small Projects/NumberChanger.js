import React, { useState, useEffect } from "react"
import randomcolor from "randomcolor"
function NumberChanger() {
    const [count, setCount] = useState(0)
    const [ChangedColor, setColor] = useState("")
    

    function Increment(){
        setCount(prevCount => prevCount + 1)
    }
    
    function Decrement(){
        setCount(prevCount => prevCount - 1)
    }    
    
    function Times(){
        setCount(prevCount => prevCount * 2)
    }

    function ChnageColor(){
        console.log(ChangedColor)
    }
    useEffect(() => {
        const intervalID = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)

        return() => clearImmediate(intervalID)
        
    }, [])

    useEffect(() => {
        setColor(randomcolor())
    }, [count])

    return (
        <div>
            <div>
                <h1 style={{color: ChangedColor}}>{count}</h1>
                <button onClick={Increment}>Increment!</button>
                <button onClick={Decrement}>Decrement!</button>
                <button onClick={Times}>Times!</button>
            </div>

        </div>
    )
}
/*
class NumberChanger extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button>Change!</button>
            </div>
        )
    }
}
*/

export default NumberChanger
