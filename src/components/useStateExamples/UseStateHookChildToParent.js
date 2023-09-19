
import { Paragraph, Input, Code } from "../styledComponents/StyledComponents"

export default function UseStateHookChildToParent(props) {

	function nameHandler(event) {
		props.sendData(event.target.value)
	}

	return (
		<div>
			<Paragraph>An Example to show How to use <Code>useState</Code> hook for data transfer from Child to Parent. </Paragraph>
			<Input onChange={nameHandler} placeholder='Enter your name' />
		</div>
	)
}