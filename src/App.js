import { useState } from 'react'
import styled from 'styled-components'
import UseStateHook from '../src/components/useStateExamples/UseStateHook'  
import UseStateHookChildToParent from './components/useStateExamples/UseStateHookChildToParent'

const Paragraph = styled.p`
	margin: 20px 0 0 20px;
`;

function App() {
  
  // ********************************************************
  // Uncomment following return block to use UseStateHook component:
  // ********************************************************
  
  // return (
  //     <div >
  //       <UseStateHook/>
  //     </div>
  //   );
  
  // ********************************************************
  // Uncomment following return block to use UseStateHookChildToParent component:
  // ********************************************************
  
    const [name, setName] = useState("")
    const useChildData = (name)=>{
      setName(name)
    }
    return (
      <div >
        <UseStateHookChildToParent sendData ={useChildData}/>
        <Paragraph>{name}</Paragraph>
      </div>
    );
    
}

export default App;
