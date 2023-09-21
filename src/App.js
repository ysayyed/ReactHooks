import { useState } from 'react'
import { Paragraph, Code, Button, ArrayBlock } from './components/styledComponents/StyledComponents'
import  {ObjectToParent, ArrayToParent, UseStateHook, UseStateHookArray, UseStateHookChildToParent, UseStateHookPrevValue} from './components/useStateExamples/index'

function App() {
  const [obj, setObj] = useState({name:'', email:''})

  function objHandler(obj){
    setObj({
      name: obj.name,
      email: obj.email
    })
  }

  return(
    <>
    <ObjectToParent receiveObj = {objHandler} />
    <ArrayBlock>Received Object &#123; Name: {obj.name != '' ? obj.name : 'None'},  Email : {obj.email != '' ? obj.email : 'None'} &#125;</ArrayBlock>
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
// Uncomment following to use UseStateHookChildToParent component:
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
// Uncomment & copy the following return block to use UseStateHookArray component:
// ****************************************************************************

// return (
//   <>
//     <UseStateHookArray />
//   </>
// )



// ****************************************************************************
// Uncomment & copy the following to use ArrayToParent component:
// ****************************************************************************

// const [array, setArray] = useState([])
//   function getArray(childArray){
//     setArray([...array, childArray])
//   }

//   function delHandler(index){
//     array.splice(index,1)
//     setArray([...array])
//   }
//   return(
//     <>
//     <ArrayToParent queryChild={getArray}/>
//     <Paragraph> <Code>Parent</Code> component</Paragraph>
//     <div style={{margin: "15px", textAlign: "justify"}}> 
//       <b>&#40;{array.map((element, index)=>{return <div key={index}><ArrayBlock >{element}</ArrayBlock> <Button onClick={()=>delHandler(index)}>Delete</Button></div> })}&#41;</b>   

//     </div>
//     </>
//   )