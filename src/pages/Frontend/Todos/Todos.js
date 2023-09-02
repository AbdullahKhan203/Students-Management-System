import React, { useEffect, useState } from 'react'
import { collection, getDocs,doc, setDoc,deleteDoc } from "firebase/firestore/lite";
import { firestore } from '../../../config/firebase'
import {GrUpdate} from 'react-icons/gr'
import {MdOutlineDelete} from 'react-icons/md'


export default function Todos() {
    const [users,setUsers]=useState([])
    console.log('users are here=>', users)
    const [userForEdit,setUserForEdit]=useState({})

    const handleChange=(e)=>{
      setUserForEdit({...userForEdit,[e.target.name]:e.target})
    }
   
    const fetchDocument=async()=>{
      
      const querySnapshot = await getDocs(collection(firestore, "users"));
      let docArray=[]
      querySnapshot.forEach((doc) => {
            let data=doc.data()
            data.id=doc.id
            console.log(data)
            docArray.push(data)
            
          // console.log(`${doc.id} => ${doc.data()}`);
        });
        setUsers(docArray)
    }

    useEffect(()=>{
        fetchDocument()
       },[])

     const handleDelete=async(user)=>{
      await deleteDoc(doc(firestore, "users",user.id));
      console.log("document deleted");

      let newUsers=users.filter((newUser)=>{
        return user.id !== newUser.id
       })


       setUsers(newUsers)
     }
    
     const handleEdit=(user)=>{
       setUserForEdit(user)
       console.log(user)
     }

    const handleUpdate=(product)=>{
        console.log(product);
        let newData={...product}

        console.log(newData);
        return
    }
       





  return (
       <div className='d-flex flex-wrap'>
       {users.length>0
        ?
       
        <>
          {users.map((user, i)=>{
        return <div  key={i} className="card d-flex flex-column justify-content-between m-2">
          <div    id='content-row' className="row">
          {/* <div   id='title' className="col-12">{i+1}</div> */}
          <div  id='title' className="col-12 fw-bold ms-1">{user.title}</div>
          <div  id='description' className="col-12 fw-lighter">{user.description}</div>
         </div>

         <div id='icon-row' className="row">
                  <div id='icons' className="logo h-10">
                    <div id='two-icons'>
                      <button style={{border:'none',outline:'none',background:'none'}} onClick={()=>{handleEdit(user)}} data-bs-toggle="modal" data-bs-target="#editModal"><GrUpdate/></button>
                      <button style={{border:'none',outline:'none',background:'none'}} onClick={()=>{handleDelete(user)}}><MdOutlineDelete/></button>
                    </div>
                  </div>
                </div>
        </div>
       })}

       </>
         :
        <div className="text-center"><div className="spinner-border text-danger"></div></div>
        }

      


        
           
        {/* // modal start */}
        {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-primary" >
  Launch demo modal
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="editModal" >
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit {userForEdit.title}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       {/* paste form start */}
       <div className="row mb-3">
  <div className="col">
    <input type="text" className="form-control" placeholder="Title" name='title' value={userForEdit.title}  onChange={handleChange}/>
  </div>
  </div>
  <div className="row mb-3">
  <div className="col">
    <input type="text" className="form-control" placeholder="Age" name='description' value={userForEdit.description} onChange={handleChange}/>
  </div>
  </div>
  {/* <div className="row mb-3">
  <div className="col">
    <input type="number" className="form-control" placeholder="Price" name='price' value={productForEdit.price} onChange={handleChange}/>
  </div>
  </div> */}
       {/* paste form end */}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={()=>{handleUpdate(userForEdit)}}>Update</button>
      </div>
    </div>
  </div>
</div>
        {/* // modal end */}

        </div>    //final div
  )
}
