import axios from 'axios';
import React, {useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [user,setUser]=useState([]);
    useEffect(()=>{
    loadUser();
     },[]);
    const loadUser=async()=>{
        const result=await axios.get("http://localhost:9000/users");
        setUser(result.data);
    }
    const deleteUser=async(id)=>{
        await axios.delete(`http://localhost:9000/users/${id}`)
        loadUser();
    };
  return (
    <>
      <div className='container'>

          <div className='py-3'>
              <h1>Homepage</h1>
              <table class="table border shadow">
    <thead class="thead-dark ">
      <tr>
        <th>S.NO</th>
        <th scope="col">Firstname</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
        {user.map((user,index)=>(
        <tr>
            <th scope="row"> {index + 1}</th>
            <td>{user.firstname}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>
                <Link to={`/View/${user.id}`}className="btn btn-primary mr-2">View</Link>
                <Link to={`/EditUser/${user.id}`} className="btn btn-outline-warning mr-2">Edit</Link>
                <Link to="/" onClick={()=>deleteUser(user.id)} className="btn btn-danger">Deleted</Link>
            </td>
        </tr>
        ))}
    </tbody>
  </table>
          </div>
         
      </div>
    </>
  )
};
export default Home;
