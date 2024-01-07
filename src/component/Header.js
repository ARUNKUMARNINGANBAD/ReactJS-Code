import { LOGO_IMGURL } from "../utils/constant";
import useonlineStatus from "../utils/onlineStatus";
import onlineStatus from "../utils/onlineStatus";
import { useState } from "react"; 
import { Link } from "react-router-dom";
const Header = () => {

  const [btnname,setbtname] = useState("Login") 

 const onlineStatus = useonlineStatus();

    return ( 
    <div className="header">
      <img className="logo" src={LOGO_IMGURL} alt="food logo"/>
    <ul className="ul">
    <li>online:{onlineStatus? "🟢":"🔴"}</li>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/about">About</Link></li>
     <li>Cart</li>
     
     <button className="login-btn" onClick={()=> {
        btnname === "Login" ? setbtname("Logout"):setbtname("Login")
     }}>{btnname}</button>
    </ul>
    </div>
    
    );
 }
 export default Header;