import React, { useEffect, useState } from 'react'
import { collection, getDocs,doc, setDoc,deleteDoc } from "firebase/firestore/lite";
import { firestore } from '../../../config/firebase'
import {GrUpdate} from 'react-icons/gr'
import {MdOutlineDelete} from 'react-icons/md'

//  get data start
import {AiFillPlusCircle} from 'react-icons/ai'
const initialState= 
         {title:'',
          description:'',
          id:''
         };
//  get data end



export default function Todos() {
    // get data start
    const [state,setState]=useState(initialState);

    const handleChange=(e)=>{
      setState({...state,[e.target.name]:e.target.value})
    }

    const handleSubmit=async(e)=>{
      e.preventDefault();
      console.log(state)
      
       const {title,description,id}=state;
       const randomID= Math.random().toString(36).slice(2)
       try {
        const docRef = await setDoc(doc(firestore,"users",randomID), {title,description,id});
        console.log("Document written with ID: ", randomID);
        // console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    // get data end
   

    const [users,setUsers]=useState([])
    console.log('users are here=>', users)
    const [userForEdit,setUserForEdit]=useState({})

    
   
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
       console.log("user for update=>",user)
     }

     const handleChanging=(e)=>{
      setUserForEdit({...userForEdit,[e.target.name]:e.target.value})
    }

    const handleUpdate=async(user)=>{
        // console.log(user);
        await setDoc(doc(firestore, "users", user.id),user,{merge:true});

      console.log("document updated");

     let newUsers=users.map((oldUser)=>{
      if(oldUser.id===user.id){
         return user
      }else{
        return oldUser
      }
    
       })

       setUsers(newUsers)

       setUserForEdit({})
       
    }
       





  return (
    <>
        {/* get data start */}
        <div className="container">
          <div className="row">
            <div className="col">
              {/* <div className="card d-flex  justify-content-center align-items-center">
                <div id='logo' className="d-flex  justify-content-center align-items-center">
                   <AiFillPlusCircle id='plus-icon' style={{fontSize:'50px',cursor:'pointer'}}  data-bs-toggle="modal" data-bs-target="#addModal"/>
                </div>
                </div> */}
                <button data-bs-toggle="modal" data-bs-target="#addModal" className='btn btn-success'>Add student</button>
                
             
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
  <div className="row mb-3">
  <div className="col">
    <input type="number" className="form-control" placeholder="id" name='id' onChange={handleChange}/>
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



        {/* get data end */}
         
       <div className='d-flex flex-wrap'>
       {users.length>0
        ?
       
        <> 
        {/* card start */}
          {/* {users.map((user, i)=>{
        return <div  key={i} className="card d-flex flex-column justify-content-between m-2">
          <div    id='content-row' className="row">
          <div  id='title' className="col-12 fw-bold ms-1">{user.title}</div>
          <div  id='description' className="col-12 fw-lighter">{user.description}</div>
          <div  id='description' className="col-12 fw-lighter">{user.id}</div>
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
       })} */}
          {/* card start */}
    

       </>
         :
        <div className="text-center"><div className="spinner-border text-danger"></div></div>
        }

      {/* new talbe of students start  205-232*/}
        {users.length>0
        ?
        <>
          {users.map((user, i)=>{
                return   <div className="table-responsive">
                    <table className="table table-light table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">id</th>
    </tr>
  </thead>
  
  <tbody>
 
  {users.map((user,i)=>{
      return <tr key={i}>
      <th scope="row">{i+1}</th>
      <td>{user.title}</td>
      <td>{user.description}</td>
      <td>{user.id}</td>
      <td><button className='btn btn-sm btn-info me-2'  data-bs-toggle="modal" data-bs-target="#editModal" onClick={()=>{handleEdit(user)}}>Update</button> <button className='btn btn-sm btn-danger' onClick={()=>{handleDelete(user)}}>Delete</button></td>
    </tr>
                      })}

  
     </tbody>
</table>
</div>
       })}
    

       </>
       :
        <div className="text-center"><div className="spinner-border text-danger"></div></div>}
      {/* new talbe of students end */}


        
           
        {/* // modal start */}
        {/* <!-- Button trigger modal --> */}
{/* <button type="button" className="btn btn-primary" >
  Launch demo modal
</button> */}

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
    <input type="text" className="form-control" placeholder="Title" name='title' value={userForEdit.title}  onChange={handleChanging}/>
  </div>
  </div>
  <div className="row mb-3">
  <div className="col">
    <input type="text" className="form-control" placeholder="Description" name='description' value={userForEdit.description} onChange={handleChanging}/>
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
        <button type="button" className="btn btn-primary" onClick={()=>{handleUpdate(userForEdit)}} data-bs-dismiss="modal">Update</button>
      </div>
    </div>
  </div>
</div>
        {/* // modal end */}

        </div>   
        {/* final div above */}
        </>
  )
}
