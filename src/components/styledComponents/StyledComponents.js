import {styled} from 'styled-components'

export const Input = styled.input`
	height: 30px;
	width: 200px;
	margin: 20px 0 0 20px;

	&:focus{
		background-color: aliceblue;
	}
`;

export const Code = styled.code`
    background: whitesmoke;
    padding: 7px;
    color: crimson;
    font-weight: bolder;
    border-radius: 10px;
`
export const Paragraph = styled.p`
	margin: 20px 0 0 20px;
    font-weight: bold;
`

export const Button = styled.button`
	margin: 20px 0 0 20px;
    font-weight: bold;
`
export const ArrayBlock = styled.code`
    padding: 5px;
    color: black;
    font-weight: bolder;
    text-align: center;

    &:hover{
        background: salmon; 
        cursor: pointer;
    }
`
