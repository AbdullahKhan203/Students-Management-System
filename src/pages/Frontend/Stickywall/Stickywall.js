import React, { useState,useEffect } from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'
import {GrUpdate} from 'react-icons/gr'
import {MdOutlineDelete} from 'react-icons/md'
import { firestore } from '../../../config/firebase';
import { collection, addDoc,doc,setDoc } from "firebase/firestore/lite";
// get data start ...........
//automatic avove
// import {getDocs } from 'firebase/firestore/lite';
//automatic avove



// get data finish ..........



const initialState= 
         {title:'',
          description:'',
         };

export default function Stickywall() {
  const [state,setState]=useState(initialState);
  // get data start ...........
  // const [users,setUsers]=useState([])

  // const fetchDocuments=async()=>{
  //   let array=[]
  //   const querySnapshot = await getDocs(collection(firestore, "users"));
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //   });
   
  //  setUsers(array)
  // }

  // useEffect(()=>{
  //   fetchDocuments()
  // },[])

  
  // get data start ...........

const handleChange=(e)=>{
  setState({...state,[e.target.name]:e.target.value})
}

const handleSubmit=async(e)=>{
  e.preventDefault();
  console.log(state)
  
   const {title,description}=state;
   const randomID= Math.random().toString(36).slice(2)
   try {
    const docRef = await setDoc(doc(firestore,"users",randomID), {title,description,id:randomID});
    console.log("Document written with ID: ", randomID);
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


// const handleSubmit=async(e)=>{
//   e.preventDefault();
//   console.log(state)
  
  
//   let randomID=Math.random().toString(36).slice(2)
//   console.log(randomID);
  
//   const {title,description}=state;

//    try {
//     await setDoc(doc(firestore, "users",randomID), {title,description,id:randomID});
//         // console.log("Document written with ID: ", docRef);
//         console.log("Document written with ID: ", randomID);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }





  return (
    <>
     
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card d-flex  justify-content-center align-items-center">
                <div id='logo' className="d-flex  justify-content-center align-items-center">
                   <AiFillPlusCircle id='plus-icon' style={{fontSize:'50px',cursor:'pointer'}}  data-bs-toggle="modal" data-bs-target="#addModal"/>
                </div>
                </div>
                
             
            </div>
          </div>
        </div>

{/* <!-- Modal --> */}
<div className="modal fade" id="addModal" >
  <div className="modal-dialog  modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div>
          <h1>Add Users</h1>
          <form >
            <div className="row mb-3">
  <div className="col">
    <input type="text" className="form-control" placeholder="title" name='title'  onChange={handleChange}/>
  </div>
  </div>
  <div className="row mb-3">
  <div className="col">
    <input type="text" className="form-control" placeholder="Description" name='description' onChange={handleChange}/>
  </div>
  </div>
  </form>
        </div>
      </div>
  
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
      </div>

    </div>
  </div>
</div>
      
    </>
  )
}
