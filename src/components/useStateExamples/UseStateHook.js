import { useState } from 'react'
import styled from 'styled-components'

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



export default function UseStateHook(props) {
	const [name, setName] = useState("")
	function nameHandler(event) {
		setName(event.target.value)
	}

	return (
		<div>
			<Paragraph>An Example to show How to use <Code>useState</Code>. </Paragraph>
			<Input onChange={nameHandler} placeholder='Enter your name' />
			<Paragraph>{name}</Paragraph>			
		</div>
	)
}