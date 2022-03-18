import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const View = () => {
  const [user,setUser]=useState({
    firstname:"",
    phone:"",
    email:""
  });
 const {id}=useParams();
 useEffect(()=>{
loadUser()
 },[])
 const loadUser= async ()=>{
   const result= await axios.get(`http://localhost:9000/users/${id}`)
   setUser(result.data);
 }
  return (
    <div className='container mt-3'>
      
      <Link to="/" className='btn btn-dark btn-sm'>Go To Home</Link>
      <h2 className=' text-danger '>USER DETAILES</h2>
      <ul className="list-group mt-3 w-50 ">
        <li className="list-group-item">Firstname:{user.firstname}</li>
        <li className="list-group-item">Phone:{user.phone}</li>
        <li className="list-group-item">Email:{user.email}</li>
      </ul>

    </div>
  )
};

export default View;
