import React from "react";
import  ReactDOM  from "react-dom/client";

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

const Heading = () => (
       <div className="topnav">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjs-QpeDYQUaGFaarDIOHWqR_uK0CUJfB-g8bIm83EUQ&s" alt="Italian Trulli"/><br/>
     <input className="sar" type="text" placeholder="Search"/>
     <button className="sar" type="submit"><i class="fa fa-search"></i></button>
        </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);



