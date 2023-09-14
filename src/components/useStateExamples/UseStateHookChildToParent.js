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



export default function UseStateHookChildToParent(props) {

	function nameHandler(event) {
		props.sendData(event.target.value)
	}

	return (
		<div>
			<Input onChange={nameHandler} placeholder='Enter your name' />
		</div>
	)
}