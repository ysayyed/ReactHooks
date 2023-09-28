// import { useState } from 'react'
// import { Paragraph, Code, Button, ArrayBlock } from './components/styledComponents/StyledComponents'
// import  { UploadFile, ObjectToParent, ArrayToParent, UseStateHook, UseStateHookArray, UseStateHookChildToParent, UseStateHookPrevValue} from './components/useStateExamples/index'
// import  UseRefHook  from "./components/useRefExamples/UseRefHook";

import { Paragraph, Code, Table, TableHead, Column } from './components/styledComponents/StyledComponents';

function App() {
    return(
      <>
      <Paragraph > Use <Code>useState</Code> hook to preview the file to be uploaded. </Paragraph>
      <UploadFile />
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

// ****************************************************************************
// Uncomment & copy the following to use ObjectToParent component:
// ****************************************************************************


// const [obj, setObj] = useState({name:'', email:''})

// function objHandler(obj){
//   setObj({
//     name: obj.name,
//     email: obj.email
//   })
// }

// return(
//   <>
//   <ObjectToParent receiveObj = {objHandler} />
//   <ArrayBlock>Received Object &#123; Name: {obj.name != '' ? obj.name : 'None'},  Email : {obj.email != '' ? obj.email : 'None'} &#125;</ArrayBlock>
//   </>
// )

// ****************************************************************************
// Uncomment & copy the following to use UseRefHook component:
// ****************************************************************************

// const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   function dataHandler(obj){
//     setEmail(obj.email)
//     setPassword(obj.password)
//   }

//   return(
//     <div>
//     <Paragraph>Using <Code>useRef</Code> hook with simple data submission:</Paragraph>
//     <UseRefHook sendData = {dataHandler} />
//     <Table>
//       {/* tbody tag is important because we are updating state of tr and td here */}
//       <tbody>
//       <tr>
//         <TableHead>Particulars</TableHead>
//         <TableHead>Data</TableHead>
//       </tr>
//       </tbody>
//       <tbody>
//       <tr>
//         <Column>Submitted Email</Column>
//         <Column>{email ? email : 'Not submitted yet!'}</Column>
//       </tr>
//       </tbody>
//       <tbody>
//       <tr>
//         <Column>Submitted Password</Column>
//         <Column>{password ? password : 'Not submitted yet!'}</Column>
//       </tr>
//       </tbody>
//     </Table>
//     </div>
//   )