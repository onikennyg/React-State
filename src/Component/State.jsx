import React from 'react'
import { useState } from 'react'


const State = () => {
    const [nameState, setNameState] = useState("Mr Bambo")
    const [jobTitleState, setJobTitleState] = useState("cocoa farm")
    const [familyStatusState, setFamilyStatusState] = useState("1 wife and 2 kids")
  
    const coronation = () => {
      setNameState("Prince Bambo")
      setJobTitleState("city")
      setFamilyStatusState("4 wives and 25 kids")
  
      
    }
    return (
      <>
  
      <h1>
        Hello my name is {nameState}, i run a {jobTitleState}, i have {familyStatusState}
      </h1>
  
      <button onClick={coronation} className='border ring rounded p-1'>Crowned</button>
    </>
  )
}

export default State
