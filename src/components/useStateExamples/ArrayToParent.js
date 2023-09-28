import { useState } from "react";
import { Paragraph, Input, Code, Button } from "../styledComponents/StyledComponents";



export default function ArrayToParent(props) {

    const [array, setArray] = useState()
    const [val, setVal] = useState('')

    function inputHandler(event) {
        setVal(event.target.value)
    }

    function arrayHandler(event) {
        event.preventDefault();
        if (val.length !== 0) {
            setArray(val)
            props.queryChild(val)
            setVal('')
        }
        else {
            alert('No value Entered!')
        }
    }

    return (
        <>
            <Paragraph>An Example to show How to use <Code>useState</Code> to pass a value from child & add to parent array. </Paragraph>
            <Paragraph><Code>Child</Code> Component</Paragraph>
            <Input type="text" onChange={inputHandler} value={val} /> <br />
            <Button onClick={arrayHandler}>Send to Parent</Button> <br /> <br />
            <div style={{ margin: "15px", textAlign: "justify" }}>
                <b>Current Value - <Code style={{ color: "white", background: "crimson" }}>{array}</Code> </b>
            </div>
            <hr />
        </>
    )
}