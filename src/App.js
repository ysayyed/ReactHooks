import { useState } from 'react'
import UseStateHook from '../src/components/useStateExamples/UseStateHook'
import UseStateHookChildToParent from './components/useStateExamples/UseStateHookChildToParent'
import UseStateHookPrevValue from './components/useStateExamples/UseStateHookPrevValue'
import UseStateHookArray from './components/useStateExamples/UseStateHookArray'
import ArrayToParent from './components/useStateExamples/ArrayToParent'
import { Paragraph, Code, Button, ArrayBlock } from './components/styledComponents/StyledComponents'

function App() {

  const [array, setArray] = useState([])
  function getArray(childArray){
    setArray([...array, childArray])
  }

  function delHandler(index){
    array.splice(index,1)
    setArray([...array])
  }
  return(
    <>
    <ArrayToParent queryChild={getArray}/>
    <Paragraph> <Code>Parent</Code> component</Paragraph>
    <div style={{margin: "15px", textAlign: "justify"}}> 
      <b>&#40;{array.map((element, index)=>{return <div><ArrayBlock key={index}>{element}</ArrayBlock> <Button onClick={()=>delHandler(index)}>Delete</Button></div> })}&#41;</b>   

    </div>
    </>
  )
 
}

export default App;


// ***************************************************************
// Uncomment following return block to use UseStateHook component:
// ***************************************************************

// return (
//     <div >
//       <UseStateHook/>
//     </div>
//   );

// ****************************************************************************
// Uncomment following return block to use UseStateHookChildToParent component:
// ****************************************************************************

// const [name, setName] = useState("")
// const useChildData = (name)=>{
//   setName(name)
// }
// return (
//   <div >
//     <UseStateHookChildToParent sendData ={useChildData}/>
//     <Paragraph>{name}</Paragraph>
//   </div>
// );

// ****************************************************************************
// Uncomment following return block to use UseStateHookPrevValue component:
// ****************************************************************************


// return (
//   <UseStateHookPrevValue />
// )

// ****************************************************************************
// Uncomment following return block to use UseStateHookArray component:
// ****************************************************************************

// return (
//   <>
//     <UseStateHookArray />
//   </>
// )