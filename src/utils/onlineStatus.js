import { useEffect, useState } from "react"

const useonlineStatus = ()=>{

  const [onlineStatus,setonlinestatus] = useState(true);

  useEffect(()=>{
 window.addEventListener("offline",()=>{
    setonlinestatus(false);
 })

 window.addEventListener("online",
 setonlinestatus(true));
  },[])

  return onlineStatus;

}

export default useonlineStatus;
