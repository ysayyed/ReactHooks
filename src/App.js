
// ***************************************************************
// Uncomment the following to use UseEffectHook component:
// ***************************************************************

import { UseEffectHook } from "./components/useEffectExamples/UseEffectHook";


function App() {
  return (
    <>
      <UseEffectHook />
    </>
  )
}

export default App;


// ***************************************************************
// Uncomment the following to use UseStateHook component:
// ***************************************************************

// import UseStateHook from './components/useStateExamples/UseStateHook'
// function App() {
//   return (
//     <div >
//       <UseStateHook />
//     </div>
//   );
// }

// export default App;

// ****************************************************************************
// Uncomment following to use UseStateHookChildToParent component:
// ****************************************************************************

// import { useState } from 'react';
// import UseStateHookChildToParent from './components/useStateExamples/UseStateHookChildToParent';
// import { Paragraph } from './components/styledComponents/StyledComponents';
// function App() {
//   const [name, setName] = useState("")
//   const useChildData = (name) => {
//     setName(name)
//   }
//   return (
//     <div >
//       <UseStateHookChildToParent sendData={useChildData} />
//       <Paragraph>{name}</Paragraph>
//     </div>
//   );
// }

// export default App;

// ****************************************************************************
// Uncomment following to use UseStateHookPrevValue component:
// ****************************************************************************

// import UseStateHookPrevValue from "./components/useStateExamples/UseStateHookPrevValue";
// function App() {
// return (
//   <UseStateHookPrevValue />
// )
// }
// export default App;

// ****************************************************************************
// Uncomment the following to use UseStateHookArray component:
// ****************************************************************************

// import UseStateHookArray from "./components/useStateExamples/UseStateHookArray";
// function App() {
//   return (
//     <>
//       <UseStateHookArray />
//     </>
//   )
// }
// export default App;


// ****************************************************************************
// Uncomment the following to use ArrayToParent component:
// ****************************************************************************
// import { useState } from 'react';
// import ArrayToParent from "./components/useStateExamples/ArrayToParent";
// import { Paragraph, Code, ArrayBlock, Button } from "./components/styledComponents/StyledComponents";

// function App() {
//   const [array, setArray] = useState([])
//   function getArray(childArray) {
//     setArray([...array, childArray])
//   }

//   function delHandler(index) {
//     array.splice(index, 1)
//     setArray([...array])
//   }
//   return (
//     <>
//       <ArrayToParent queryChild={getArray} />
//       <Paragraph> <Code>Parent</Code> component</Paragraph>
//       <div style={{ margin: "15px", textAlign: "justify" }}>
//         <b>&#40;{array.map((element, index) => { return <div key={index}><ArrayBlock >{element}</ArrayBlock> <Button onClick={() => delHandler(index)}>Delete</Button></div> })}&#41;</b>

//       </div>
//     </>
//   )
// }
// export default App;

// ****************************************************************************
// Uncomment the following to use ObjectToParent component:
// ****************************************************************************
// import { useState } from "react";
// import ObjectToParent from "./components/useStateExamples/ObjectToParent";
// import { ArrayBlock } from "./components/styledComponents/StyledComponents";

// function App() {
//   const [obj, setObj] = useState({ name: '', email: '' })

//   function objHandler(obj) {
//     setObj({
//       name: obj.name,
//       email: obj.email
//     })
//   }

//   return (
//     <>
//       <ObjectToParent receiveObj={objHandler} />
//       <ArrayBlock>Received Object &#123; Name: {obj.name != '' ? obj.name : 'None'},  Email : {obj.email != '' ? obj.email : 'None'} &#125;</ArrayBlock>
//     </>
//   )
// }
// export default App;

// ****************************************************************************
// Uncomment & copy the following to use UseRefHook component:
// ****************************************************************************

// import { useState } from "react";
// import { UseRefHook } from "./components/useRefExamples/UseRefHook";
// import { Paragraph, Code, TableHead, Table, Column } from "./components/styledComponents/StyledComponents";
// function App() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   function dataHandler(obj) {
//     setEmail(obj.email)
//     setPassword(obj.password)
//   }

//   return (
//     <div>
//       <Paragraph>Using <Code>useRef</Code> hook with simple data submission:</Paragraph>
//       <UseRefHook sendData={dataHandler} />
//       <Table>
//         {/* tbody tag is important because we are updating state of tr and td here */}
//         <tbody>
//           <tr>
//             <TableHead>Particulars</TableHead>
//             <TableHead>Data</TableHead>
//           </tr>
//         </tbody>
//         <tbody>
//           <tr>
//             <Column>Submitted Email</Column>
//             <Column>{email ? email : 'Not submitted yet!'}</Column>
//           </tr>
//         </tbody>
//         <tbody>
//           <tr>
//             <Column>Submitted Password</Column>
//             <Column>{password ? password : 'Not submitted yet!'}</Column>
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//   )
// }
// export default App;

// ****************************************************************************
// Uncomment the following to use UploadFile component:
// ****************************************************************************

// import { Paragraph, Code } from "./components/styledComponents/StyledComponents";
// import UploadFile from "./components/useStateExamples/UploadFile";

// function App() {
//   return (
//     <>
//       <Paragraph > Use <Code>useState</Code> hook to preview the file to be uploaded. </Paragraph>
//       <UploadFile />
//     </>
//   )
// }
// export default App;
