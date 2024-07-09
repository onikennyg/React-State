
// // Step 1: import the usestate from react
// import {useState} from 'react'
// import State from './Component/State'

// const App = () => {
//   // Step 2: create state variables and a function
//   const [nameState, setNameState] = useState("Bolu")
//   const [jobTitleState, setJobTitleState] = useState("upcoming artiste")
//   const [locationState, setLocationState] = useState("i came from the gutters")

//   const meetApostle = () => {
//     setNameState("BoluCello")
//     setJobTitleState("superstar")
//     setLocationState("i now live in New York")

    
//   }
//   return (
//     <>

//     <h1>
//       Hello my name is {nameState}, i am a {jobTitleState}, i play the Cello, and {locationState}
//     </h1>

//     <button onClick={meetApostle} className='border ring rounded p-1'>Meet Apostle</button>

//     <State/>

//     </>
//   )
// }

// export default App


import React from 'react'
import State from './Component/State'
import Form from './Component/Form'
import Register from './Component/Register'

const App = () => {
  return (
    <div>
      <State/>
      <br />
      <br />
      <br />
      <br />
      <Form/>
      <br />
      <br />
      <br />
      <br />
      <Register/>
    </div>
  )
}

export default App

