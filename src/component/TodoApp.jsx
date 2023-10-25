/* eslint-disable*/
import { useState } from "react"

const TodoApp = () => {

    const[list,setList] = useState([]);
    const[item,setItem] = useState("");

    const addToList = ()=>{
        list.push(item)
        setList([...list])
    }

    const removeItem = (index)=>{
        list.splice(index,1);
        setList([...list])
    }


  return (
    <div>

        <table>
            <tbody>
               {
                list.length!==0? (
                    list.map((element,index)=>{
                        return(
                            <tr>
                                <td><ul><li> {element} </li></ul></td>
                                <td><button
                                onClick={()=>{
                                    removeItem(index)
                                }}
                                >Remove</button></td>
                            </tr>
                        )
                    })
                ):(
                    <tr></tr>
                )
               } 
            </tbody>
        </table>
        
        <h4>Total Task: {list.length}</h4>
        <input onChange={(e)=>setItem(e.target.value)} placeholder="Enter your text" />
        <button onClick={addToList}>Add</button>
    </div>
  )
}

export default TodoApp