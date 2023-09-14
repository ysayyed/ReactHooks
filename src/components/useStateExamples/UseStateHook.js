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

const Paragraph = styled.p`
	margin: 20px 0 0 20px;
`


export default function UseStateHook(props) {
	const [name, setName] = useState("")
	function nameHandler(event) {
		setName(event.target.value)
	}

	return (
		<div>
			<Input onChange={nameHandler} placeholder='Enter your name' />
			<Paragraph>{name}</Paragraph>			
		</div>
	)
}