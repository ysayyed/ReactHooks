import { useState } from "react";
import { Paragraph, Input, Code, Button } from "../styledComponents/StyledComponents";



export function ObjectToParent(props){
    const [nameVal, setNameVal] = useState('')
    const [emailVal, setEmailVal]= useState('')
    const [obj, setObj] = useState({name: '', email: ''})
    function nameHandler(event){
        setNameVal(event.target.value)
    }

    function emailHandler(event){
        setEmailVal(event.target.value)
    }

    function arrayHandler(event) {
        event.preventDefault();
        if(nameVal.length !== 0 && emailVal.length !== 0)
        {
            setObj({
                name: nameVal,
                email: emailVal
            })
            props.receiveObj({
                name: nameVal,
                email: emailVal
            })
        }
        else{
            alert('No value Entered!')
        }	
 
    }


    return(
        <>
            <Paragraph>An Example to show How to use <Code>useState</Code> to pass an object from child & add to parent array. </Paragraph>
            <Paragraph><Code>Child</Code> Component</Paragraph>
            <Input type="text" onChange={nameHandler} value={nameVal}/> <br/>
            <Input type="email" onChange={emailHandler} value={emailVal}/> <br/>
            <Button onClick={arrayHandler}>Send to Parent</Button> <br /> <br/>
            <div style={{margin: "15px", textAlign: "justify"}}> 
                <b>Current Value - <Code style={{color:"white", background: "crimson"}}>{obj.name} &nbsp;{obj.email}</Code> </b>
            </div>
            <hr/>
        </>
    )
}