import React, { Suspense, lazy, useEffect, useState } from "react";
import  ReactDOM  from "react-dom/client";
import Header  from "./component/Header";
import Body from "./component/Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
//import About from "./component/About";
import Error from "./component/Error";
import Restaurant from "./component/Restaurant";
import UserContext from "./component/UserContext";
//import Cart from "./component/Cart";


//JSX
//const heading = ( <h1 class = "title"> <h1><h3>TITLE</h3></h1></h1>)


// const Heading = () => {
//    return <h1 class = "title"> <h1><h3>TITLE</h3></h1></h1>
// }
// const Title = () => (<div>
//     <p>Hello Arun!!❤️</p>
//     <p></p>
// </div>)

// const Heading = () => (
//     <div>
//     <Title></Title>
//      {4+3}
//      </div>  
// );

// const Heading = () => (
//        <div className="topnav">
//        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjs-QpeDYQUaGFaarDIOHWqR_uK0CUJfB-g8bIm83EUQ&s" alt="Italian Trulli"/><br/>
//      <input className="sar" type="text" placeholder="Search"/>
//      <button className="sar" type="submit"><i class="fa fa-search"></i></button>
//         </div>
// );


const MainCone = () => {

  
const [username,setusername] = useState(null);



useEffect(()=>{
  const data ={
    name: "Arun Kumar K"
  
  }
  setusername(data.name)
},[])

  return (
    <>
    <UserContext.Provider value={{loggedInUser:username, setusername}}>
<Header />
<Outlet />
</UserContext.Provider>
</>
    
    
  );
}

const Cart = lazy(()=>import("./component/Cart"))
const About = lazy(()=>import("./component/About"))

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainCone />, 
    children: [{
      
        path:"/",
        element:<Body />  
      }
    ,
    {
      path:"/about",
      element:(<Suspense fallback={<h1>Loading....</h1>}><About />   </Suspense>)
    },
    {
      path:"/cart",
      element:<Suspense fallback={<h1>Loading....</h1>}><Cart />  </Suspense>
    },
  {
    path:"restaurant/:resid",
    element:<Restaurant />
    
  }],
    errorElement:<Error />
  }

])

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<MainCone />);
root.render(<RouterProvider router={appRouter} />)



