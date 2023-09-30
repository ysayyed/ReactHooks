import { Input, Button, Paragraph, Code } from "../styledComponents/StyledComponents"
import { useState, useEffect } from "react"

export function UseEffectCounter(){
    const [val, setVal] = useState(0)

    useEffect(
        ()=>{
          if(val % 10 == 0 && val != 0){
            alert("Reached a multiple of 10")
            console.log("I am a multiple of 10 ")
          }
          if(val == 30){
            setVal(0)
          }
        },[val]
    )

    function clickHandler(){
        setVal(prevVal => prevVal + 1)
    }
    
    
    return (
    <>
        <Paragraph>Demonstration of <Code>useEffect</Code> hook; how it works with dependencies. </Paragraph>
        <Paragraph>Open your browser console to see how it renders when there is a change in dependency.</Paragraph>
        <Input type="text" value={val} onChange={(event)=>{event.preventDefault()}} /> 
        <Button onClick={clickHandler}>Add 1</Button>
    
    </>
    )
}