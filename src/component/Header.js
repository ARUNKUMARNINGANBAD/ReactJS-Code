import { LOGO_IMGURL } from "../utils/constant";
import useonlineStatus from "../utils/onlineStatus";
import onlineStatus from "../utils/onlineStatus";
import { useContext, useState } from "react"; 
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
const Header = () => {

  const [btnname,setbtname] = useState("Login") 

 const onlineStatus = useonlineStatus();

 const {loggedInUser} = useContext(UserContext);

    return ( 
    <div className="flex justify-between bg-pink-200 shadow-lg sm:bg-slate-300 lg:bg-yellow-200">
      <img className="w-24" src={LOGO_IMGURL} alt="food logo"/>
      <div className="flex items-center">
    <ul className="flex p-4 m-4">
    <li className="px-4">online:{onlineStatus? "🟢":"🔴"}</li>
     <li className="px-4"><Link to="/">Home</Link></li>
     <li className="px-4"><Link to="/about">About</Link></li>
     <li className="px-4"><Link to="/cart">Cart</Link></li>
     <li className="px-4">{loggedInUser}</li>
     <li className="px-4">
     <button className="login-btn" onClick={()=> {
        btnname === "Login" ? setbtname("Logout"):setbtname("Login")
     }}>{btnname}</button></li>

    </ul>
    </div>
    </div>
    
    );
 }
 export default Header;