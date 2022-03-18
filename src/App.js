//1 CALCULATER

// import React from 'react'
// import Calculator from './Calulator/Calculator';
// const App = () => {
//   return (
//     <div>
//        <Calculator/>
//     </div>
//   )
// }
// export default App


// Routing

// import React from 'react'
// import './App.css'
//  import { BrowserRouter,Routes,Route } from 'react-router-dom';
//  import SignIn from './Routing/SignIn'
//   import SignUp from './Routing/SignUp';
//  import Navbar from './Routing/Navbar';
//  import Home from './Routing/Home';
//  import OnClick from './Routing/OnClick';
//  const App = () => {
//   return (
//    <>
// <BrowserRouter>   
// <Navbar/>
//   <Routes> 
// <Route exact path="/SignUp" element={<SignUp/>}></Route> 
// <Route exact path="/Home" element={<Home/>}></Route> 
// <Route exact path="/Onclick" element={<OnClick/>}></Route>
// <Route exact path="/SignIn" element={<SignIn/>}></Route> 
// </Routes>
// </BrowserRouter> 
//    </>
//  )
//  }
//  export default App



// CrudComponent

import React from 'react'
// import './App.css'
import About from './CrudComponent/Pages/About';
import Contacts from './CrudComponent/Pages/Contacts';
import Home from './CrudComponent/Pages/Home';
import NavBar from './CrudComponent/Layote/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddUser from './CrudComponent/users/AddUser';
import EditUser from './CrudComponent/users/EditUser';
import View from './CrudComponent/users/View';

const App = () => {
  return (
    <div>
      <BrowserRouter> 
     <NavBar/>
   <Routes>
     <Route exact path="/" element={<Home/>}></Route>
     <Route exact path="/About" element={<About/>}></Route>
     <Route exact path="/Contacts" element={<Contacts/>}></Route>
     <Route exact path="/AddUser" element={<AddUser/>}></Route>
     <Route exact path="/EditUser/:id" element={<EditUser/>}></Route>
     <Route exact path="/View/:id" element={<View/>}></Route>
  </Routes>
</BrowserRouter>
    </div>
  )
}
export default App

// Postdata

// import React from 'react'
// import './App.css'
// import Post from './Postdata/Post';
// const App = () => {
//   return (
//     <div>
//        <Post/>
//     </div>
//   )
// }

// export default App


// Getdata

// import React from 'react'
// import './App.css'
// import Get from './Getdata/Get';
// const App = () => {
//   return (
//     <div>
//       <Get/>
//     </div>
//   )
// }

// export default App

// useState

// import React from 'react'
// import './App.css'
//  import Student from './useStateStudent/Student';
// const App = () => {
//   return (
//     <div>
//        <Student/> 
//        <Student/>  
//     </div>
//   )
// }

// export default App



// props

// import React from 'react'
// import './App.css'
// import Funprop from './props/Funprop';
//   const App = () => {
//    return (
//       <>
//      <nav className='Navbar'>
//           <span>Navbar</span>
//       </nav>
//       <Funprop name="manoj" age="24"/>
//       <Funprop name="manoj" age="24"/>
//     </>
//    );
//    }
//  export default App;  



// react image import

// import React from 'react'
// import ReactCards from'./react img import/ReactCards'
// const App = () => {
//   return (
//     <div>
//       <ReactCards/>
//     </div>
//   )
// }

// export default App






// onclick counter

//  import React from 'react'
//  import './App.css'

// import Counter from './counteronClick/Counter'
//  const App = () => {
//    return (
//      <div>
//         <Counter/>
//      </div>
//    )
//  }
 
//  export default App
 


/*RESUME*/

// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Resume/Home';
// const App = () => {
//   return (
// <>
// <Home/>
//     <BrowserRouter>
//      <Routes>
//        <Route> </Route> 
//      </Routes>
//     </BrowserRouter>
//     </>
//   )
// }
// export default App;





//  React redux Increment And Decrement

// import React from 'react'
// import {connect} from 'react-redux'
// import { IncAction } from './ReactRedux/Action'
// import { DecAction } from './ReactRedux/Action'
// const App = ( {local_varaiable,IncAction,DecAction}) => {
//   return (
//     <>
//     <center>
//       <h2 className='text-center mt-5'> {local_varaiable}</h2>
//       <button className='mx-2 bg-success' onClick={()=>IncAction(5)}>Increment</button>
//       <button className=' bg-danger' onClick={()=>DecAction(5)}>Decrement</button>
//       </center>
//     </>
//   )
// }
// const mapStateToProps=(state)=>({
//    local_varaiable: state
// });
// export default  connect (mapStateToProps,{IncAction,DecAction}) (App);



// context apI

// import React,{createContext, useState} from 'react'
// import Count from './ContextApi/Count'
// import Display from './ContextApi/Display'

//  export const store=createContext();
// const App = () => {
//   const [data,setData]=useState([
//     {
//      brandname:"Nokia"
//     },
//    {
//      brandname:"mi"
//    },
//    {
//     brandname:"iphone"
//    },
//    {
//      brandname:"realme"
//    }
// ]);
//   return (
//     <>
//     <store.Provider value={[data,setData]}>
//       <center>
//         <Count/>
//         <Display/>
//       </center>
//       </store.Provider>
//     </>
//   )
// }
// export default App






// getimage data

// import React,{ useState } from 'react'
// import axios from 'axios';
// import Gallery from './getImage/Gallery';
// const App = () => {
//   const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
//   const[search,setSearch]=useState("");
//   const [data,setData]=useState([]);
//   const changeHandler=e=>{
//     setSearch(e.target.value);
//   }
//   const submitHandler=e=>{
// e.preventDefault();
// // setSearch("");
// axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search} &per_page=24&format=json&nojsoncallback=1`).then(
// Response=>setData(Response.data.photos.photo)
// )
// console.log(search)
//   }
//   return (
//     <center>
//       <h2 className='mt-3'>Gallery Snapshorts</h2>
//     <form onSubmit={submitHandler}>
//       <input onChange={changeHandler} value={search} type="text" placeholder='Search'/><br/><br/>
//       <input className='btn-success'  type="submit" value="Search"/>
//     </form><br/>
//     {data.length>=1?<Gallery data={data}/>:<h5>No data load</h5>}
//     </center>
//   )
// }
// export default App



// Todoslist

// import React,{useState}from 'react'
// import TodosList from './TodosAddDelete/TodosList';
// const App = () => {
//   const [task,setTask]=useState("");
//   const [todos,setTodos]=useState([]);
//   // change
//    const changeHandler=e=>{
// setTask(e.target.value);
//   }
//   // submit
//   const submitHandler=e=>{
//     e.preventDefault();
//     const newTodos=[...todos,task]
//     setTodos(newTodos);
//     setTask("");
//     console.log(task);
//   }
//   // delet
//   const deletHandler=(indexvalue)=>{
// const newTodos=todos.filter((todo,index)=>index !== indexvalue);
// setTodos(newTodos)
//   }
//   return (
//     <>
//       <center>
//         <div className='card'>
//           <div className='card-body'>
//               <h5  className='card-title'> Todos Management Appilication</h5>
//               <form onSubmit={submitHandler}>
//                 <input onChange={changeHandler} value={task} type="text" name='task' placeholder='Search'/> &nbsp;&nbsp;
//                 <input className='btn-success ' type="submit" value="Add"  name="Add"/>
//               </form>
//                <TodosList todolist={todos} deletHandler={deletHandler}/>
//           </div>
//         </div>
//       </center>
//     </>
//   )
// }
// export default App;

// HOC

// import React from 'react'
// import Hoc from './Hoc/Hoc'
// const App = (props) => {
//   return (
//     <center>
//       <h2>welcome {props.name}</h2>
//     </center>
//   )
// }

// export default Hoc(App)



// searcg filter

// import React,{useState} from 'react'
// import Data from './db.json'

// const App = () => {
//   const[search,setSearch]=useState("");
//  return(
//     <center>
//       <div> 
//         <h4>Enter Your City:</h4>
//         <input value={search} onChange={(e)=>setSearch(e.target.value)}
//           type="text" placeholder='City Name'/><br/> <br/>
//          {Data.Data.filter(city=>city.name.toLowerCase().includes(search.toLowerCase())).map(city=> { 
//           return(
//           <div style={{"border":"1px solid black","padding":"10px","margin":"10px","max-width":"70%"}} >
//             {city.name}
//             </div>
//           )})}
//       </div>
//     </center>
//   )
// }

// export default App;


// useRef

// import React from 'react'
// import UseRef from './UseRef/UseRef'

// const App = () => {
//   return (
//     <div>
//       <UseRef/>
//     </div>
//   )
// }

// export default App;


//useMemo

// import React from 'react'
// import UseMemo from './UseMemo/UseMemo'
// const App = () => {
//   return (
//     <center>
//        <UseMemo/>
//     </center>
//   )
// }

// export default App;


// custom hook or own create use hook

// import React from 'react'
// import UseFetch from './custom hook/UseFetch'

// const App = () => {

// const data=UseFetch("http://localhost:9000/Data");
//   return (
//     <center>
//       <h2>citys </h2>
//       <div> {data.map((user)=><p key={user.name}>{user.name}</p>)}</div>
//     </center>
//   )
// }

// export default App;
