import axios from 'axios';
import React, { useState } from 'react';

import {useNavigate} from "react-router-dom"
const AddUser = () => {
    let history=useNavigate();
    const [user,setUser]=useState({
         firstname:"",
         phone:"",
         email:""
    });
    const {firstname,phone,email}=user;
    const onInputChange=(e)=>{
setUser({...user,[e.target.name]:e.target.value});
    };
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:9000/users",user);
        history("/");
    };
  return (
    <>
      <div className='container mt-3'>
        <div className='row'>
            <div className='col-sm-4'>
                <div className='card shadow-lg'>
                <h2 className='text-success text-center'>ADD USER</h2>
                    <div className='card-body'>
                    <form onSubmit={e=>onSubmit(e)}>
                           <div className="form-group">
                              <input
                              name='firstname'
                              value={firstname}
                              onChange={(e)=>onInputChange(e)}
                               className="form-control"
                                type="text" 
                                placeholder="username"/>
                           </div>
                           <div className="form-group">
                              <input 
                              name='phone'
                              value={phone}
                              onChange={(e)=>onInputChange(e)}
                              className="form-control" 
                              type="number" 
                              placeholder="+91 number"/>
                           </div>          
                           <div className="form-group">
                              <input
                              name='email'
                              value={email}
                              onChange={(e)=>onInputChange(e)}
                               className="form-control"
                                type="email"
                                 placeholder="email@gmail.com"/>
                           </div>
         
                          <div className='text-center'>
                              <button type='submit' className='btn btn-success btn-sm'>Add user</button>
                          </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AddUser;
