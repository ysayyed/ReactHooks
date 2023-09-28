import { Input, Button } from "../styledComponents/StyledComponents"
import { useRef } from "react"

export default function UseRefHook(props){
    const emailRef = useRef();
    const passwordRef = useRef();
    function submitHandler(){
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        props.sendData(data)
    }

    function clearInput(){
        emailRef.current.value = ''
        passwordRef.current.value = ''
    }

    return(
        <div>
            
                <label htmlFor="email"></label> <br />
                <Input type="text"  name="email" ref={emailRef}/> <br />
                <label htmlFor="password"></label> <br />
                <Input type="password"  name="password" ref={passwordRef}/><br />
                <Button onClick={submitHandler}>Submit</Button> &nbsp;  
                <Button onClick={clearInput}>Reset</Button> &nbsp;
        </div>
    )
}