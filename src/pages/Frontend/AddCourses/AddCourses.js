import React,{useState} from 'react'
import { addDoc, collection, setDoc,doc } from "firebase/firestore/lite";
import { firestore } from '../../../config/firebase';



const initialState={
    id:'',
    title:'',
    description:'',
}
export default function AddCourses() {
     const [state,setState]=useState('')
    const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
const handleSubmit=async(e)=>{
    e.preventDefault()
   console.log(state);
   let {id,title,description}=state
   let randomId=Math.random().toString(36).slice(2)
   console.log(randomId);
   let data={id,title,description,randomId}
    
   try {
    const docRef = await setDoc(doc(firestore,"courses", randomId), {data});
    console.log("Document written with ID: ", randomId);
    console.log("Document written with ID: ", randomId);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

}

  return (
    <>
           <div className="py-5 w-100">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            {/* <h1>Heading</h1> */}
            {/* <div className="card p-2 p-md-4 p-lg-5"> */}
            <h1 className="text-center mb-4">Register Form</h1>
            <form onSubmit={handleSubmit}>
            <div className="row mb-3">
  <div className="col">
    <input type="number" className="form-control" placeholder="idd" name='id'  onChange={handleChange}/>
  </div>
  </div>
  <div className="row mb-3">
  <div className="col">
    <input type="text" className="form-control" placeholder="title" aria-label="Last name" name='title' onChange={handleChange}/>
  </div>
  </div>
  <div className="row mb-3">
  <div className="col">
    <input type="text" className="form-control" placeholder="description" aria-label="Last name" name='password' onChange={handleChange}/>
  </div>
  </div>
  <div className="row">
    <div className=" text-center">
      <button className='btn btn-outline-success w-50'>Register</button>
    </div>
  </div>
  </form>

            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
