
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