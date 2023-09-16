import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
	height: 30px;
	width: 200px;
	margin: 20px 0 0 20px;

	&:focus{
		background-color: aliceblue;
	}
`;

const Code = styled.code`
    background: whitesmoke;
    padding: 7px;
    color: crimson;
    font-weight: bolder;
    border-radius: 10px;
`
const Paragraph = styled.p`
	margin: 20px 0 0 20px;
    font-weight: bold;
`

const Button = styled.button`
	margin: 20px 0 0 20px;
    font-weight: bold;
`


export default function UseStateHookArray() {
	const [array, setArray] = useState([])
	const [val, setVal] = useState()

	function inputHandler(event) {
		setVal(event.target.value)
	}
	function arrayHandler() {
		setArray([...array, val])
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
				{array.length > 0 ? array.map(item => <li>{item}</li>) : <li>None</li>}
			</ul>
		</>
	)
}