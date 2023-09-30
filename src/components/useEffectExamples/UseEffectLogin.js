import { useState, useEffect } from 'react'
import {Input, Button} from '../styledComponents/StyledComponents'

export function UseEffectLogin({getStatus}){

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)

    useEffect(()=>{
        setIsFormValid(
            email.includes('@') && pass.trim().length > 5
        )
    },[email,pass])

    function emailHandler(event){
        setEmail(event.target.value)
    }

    function passHandler(event){
        setPass(event.target.value) 
    }

    function clickHandler(){
        if(isFormValid)
        {
            getStatus(true)
        }
    }

    return(
        <>
        <Input type="email" style={{background: isFormValid ? 'aquamarine' : 'lightpink'}} value={email} onChange={emailHandler}/> <br />
        <Input type="password" style={{background: isFormValid ? 'aquamarine' : 'lightpink'}} value={pass} onChange={passHandler}/><br />
        <Button disabled={!isFormValid} onClick={clickHandler}>Login</Button>
        </>
    )
}