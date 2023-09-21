import { useState } from 'react'
import { Paragraph, Input, Code } from '../styledComponents/StyledComponents'



export function UseStateHook(props) {
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