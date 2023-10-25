/* eslint-disable*/


const App = () => {
  // let marks = 80;
  // return (
  //   <div>
  //     {(()=>{
  //       if (marks>80 && marks<100) {
  //         return <h2>A+</h2>
  //       }
  //       else if (marks>70 && marks<=80){
  //         return <h2>A</h2>
  //       }
  //       else{
  //         return <h1>F</h1>
  //       }
  //     })()}
  //   </div>
  // )
  // const city = ['dhaka','barisal','kalapara']
  // return(
  //   <div>
  //     <ol>
  //       {
  //         city.map((item,i)=>{
  //           return <li key={i.toString()}>{item}</li>
  //         })
  //       }
  //     </ol>
  //   </div>
  // )
  // const status = false;
  // if(status == true){
  //   return(
  //     <div>
  //       <h1>Loging Status</h1>
  //       <button>Logout</button>
  //     </div>
  //   );
  // }else{
  //   return(
  //     <div>
  //       <h1>Loging Status</h1>
  //       <button>Login</button>
  //     </div>
  //   );
  // }
  // const loginStatusBtn =(status)=>{
  //   if (status == true) {
  //     return <button>Logout</button>
  //   } else {
  //     return <button>Login</button>
  //   }
  // }
  // return(
  //   <div>
  //     <h1>loging status</h1>
  //     {loginStatusBtn(true)}
  //   </div>
  // )
  // let status = false;
  // return(
  //   <div>
  //     {
  //       status?
  //        <button>Logout</button>
  //        :
  //        <button>login</button>
  //     }
  //   </div>
  // )
  // let status = true;
  // return(
  //   <div>
  //   <h1>Loging Status</h1>
  //   {status&& <button>Logout</button>}
  //   </div>
  // )
  // let status = false;

  // return <div>
  //   <h1>Loging Status</h1>
  //   {(()=>{
  //     if(status == true){
  //       return <button>LogOut</button>
  //     }else{
  //       return <button>loging</button>
  //     }
  //   })()}
  // </div>;
//  let myHead = useRef();

//   const change = ()=>{
//     myHead.current.innerHTML = "<ul><li>A</li></ul>"
//   }
  
//   return(
//     <div>
//       <h1 ref={myHead} ></h1>
//       <button onClick={change}>click</button>
//     </div>
//   )
  // let firstName = useRef();
  // let lastName = useRef();
  // let firstName,lastName = useRef();
  // const change= ()=>{
  //  let fName=  firstName.value;
  //  let LName=  lastName.value;
  //  alert(fName+" " +LName)
  // }
  // // const change= ()=>{
  // //  let fName=  firstName.current.value;
  // //  let LName=  lastName.current.value;
  // //  alert(fName+" " +LName)
  // // }
  // return(
  //   <div>
  //     <input ref={(a)=>firstName =a} placeholder="Enter Your First Name" /><br />
  //     <input ref={(b)=>lastName=b} placeholder="Enter Your First Name" />

  //     <button onClick={change}>Click</button>

  //   </div>
  // )


  //   let number = useRef(0);
  //   const Change = ()=>{
  //     number.current++
  //     console.log(`Clicked ${number.current} times`);
  //   }

  // return(
  //   <div>
  //     <h1></h1>
  //     {/* <button onClick={()=>Change()}>Change</button> */}
  //     <button onClick={Change}>Click</button>

  //   </div>
  // )

  // let apiData = useRef(null);
  // let myPTag = useRef();


  // const fetchData =async ()=>{
  //   const response = await fetch("https://dummyjson.com/product/1")
  //   apiData.current=await response.json();

  // }

  // const showData = ()=>{
  //   myPTag.current.innerText =JSON.stringify(apiData.current)
  // }

  // return (
  //   <div>
  //     <p ref={myPTag}></p>
  //     <button onClick={fetchData}>Call api</button>
  //     <button onClick={showData}>Show data</button>
  //   </div>
  // )

// react hook 

  // let [number,setNumber] = useState(0);
  // const change = ()=>{
  //   setNumber(number+1);
  // }

  // return(
  //   <div>
  //     <h1>Number: {number}</h1>
  //     <button onClick={change}>Click</button>
  //   </div>
  // )


  //REACT HOOK OBJECT USESTATE

  // let [object,setObject] = useState({
  //   key1:'value 1',
  //   key2:'value 2'
  // });

  // const change = ()=>{
  //   setObject(
  //     prevObj =>({
  //       ...prevObj,
  //       key1:'new value added'
  //     })
  //   )

  // }

  // return(
  //   <div>
  //     <h1>{object.key1}</h1>
  //     <button onClick={change}>Click</button>
  //   </div>
  // )






};

export default App;
