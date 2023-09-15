import { useState } from 'react'
import styled from 'styled-components'
const Input = styled.input`
	height: 30px;
	width: 100px;
	margin: 20px 0 0 70px;

	&:focus{
		background-color: aliceblue;
	}

    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button{
        -webkit-appearance: none;
    }
`;


const Button = styled.button`
    margin: 20px 0 0px 60px;
    width: 30px;
    height: 30px;
`

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


export default function UseStateHookPrevValue(){
    const [count, setCount] = useState(0)

    function decrementHandler(){
        setCount(prevCount => prevCount - 1)
    }

    function incrementHandler(){
        setCount(prevCount => prevCount + 1)
    }

    return(
        <div>
            <Paragraph>An Example to show How to use <Code>useState</Code> hook with previous value. </Paragraph>
            <Input type="number" onChange={(e)=>setCount(e.target.value)} value={count}/> <br/>
            <Button onClick={decrementHandler}> - </Button>
            <Button onClick={incrementHandler}> + </Button>
        </div>
    )
}