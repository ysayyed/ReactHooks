import { useState } from "react";
import { Paragraph, Button, Code, Input } from "../styledComponents/StyledComponents";
import { styled } from "styled-components";


export default function UseStateHookArray() {
	const [array, setArray] = useState([])
	const [val, setVal] = useState()

	function inputHandler(event) {
		setVal(event.target.value)
	}
	function arrayHandler() {
		setArray([...array, val])
	}
	function delHandler(index) {
		array.splice(index, 1);
		setArray([...array])
	}
	return (
		<>
			<Paragraph>Use of <Code>useState</Code> hook for arrays.</Paragraph>
			<Paragraph># Updating array <i>list here</i> by pushing recent input values. </Paragraph>
			<Paragraph># Also watch the dynamic list in action.</Paragraph>
			<Input type="text" onChange={inputHandler} />
			<br />
			<Button onClick={arrayHandler}>Submit</Button> <br />
			<ul>
				{array.length > 0 ? array.map((item, index) => <li key={index}>{item} <Button onClick={() => delHandler(index)}>Delete</Button> </li>) : <li>None</li>}
			</ul>


		</>
	)
}