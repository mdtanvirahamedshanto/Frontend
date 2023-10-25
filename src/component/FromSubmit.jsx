/* eslint-disable*/

import { useState } from "react"

const FromSubmit = () => {

    let [FromObj,SetFromObj]=useState({fName:'',lName:'',city:'',gender:''})

    const inputOnChange = (property,value)=>{
        SetFromObj(prevObj=>({
            ...prevObj,
            [property]:value
        }))
    }

    const formSubmit=(e)=>{
        e.preventDefault();
        console.log(FromObj);
    }

  return (
    <div className="container">
        <form onSubmit={formSubmit}>
            <input type="text" onChange={(e)=>{inputOnChange()}} placeholder="Enter your name" />
        </form>

    </div>
  )
}

export default FromSubmit