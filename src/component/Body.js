
import Card from "./Card";
import {useState,useEffect} from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { swiggyURL } from "../utils/constant";
import useonlineStatus from "../utils/onlineStatus";

//import resobj from "../utils/constant";

const Body = () => {


    const [regobj,setregobj] = useState([]);
    const [values, setValue] = useState('');
    const [filobj,setfilobj]= useState([]);
    //const filtobj = regobj;
    //const handleChange = (e) => setValue(e.target.value);

    //https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660
    //const swiggyURL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9261103&lng=77.4848359&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //const swiggyURL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9261103&lng=77.4848359&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    //       data/cards[0] /card/card/gridElements/restaurants
  

    useEffect(()=>{
      fetchdata()},[]);




    
    async function fetchdata(){
      try{
        const data = await fetch(swiggyURL);
        const jsonvalue = await data.json();
      
        setregobj(jsonvalue.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
      //setregobj(jsonvalue.all_country_code);
      setfilobj(jsonvalue.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
      //setfilobj(jsonvalue.all_country_code);
      console.log(jsonvalue.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
      console.log("hello")
   
      }
      catch (err){
         console.log(err);
      }
    }

    const handleChange = (e) => setValue(e.target.value);
/*
    if(regobj.length===0){
      
      return <Shimmer />
    
    }
*/
const onlineStatus = useonlineStatus();
if(!onlineStatus)
{
  return(
    <h1>Please connect to Internet</h1>
  );
}

    return regobj.length===0 ? <Shimmer /> :(
      
      <div className="body">
       
     <input type="text" value={values} onChange={handleChange} />
       
     <button className="filter-btn" onClick={()=>{
        
        fetchdata();
       }}>Reset</button>

       <button className="filter-btn" onClick={()=>{
        const filterlist = regobj.filter((res) => {return (res.info.name.toLowerCase().includes(values.toLowerCase()))});
        setfilobj(filterlist);
        
       }}>search</button>

      
       <button className="filter-btn" onClick={()=>{
        const filterlist = regobj.filter((res) => {return (res.info.avgRatingString>4.4)});
        setfilobj(filterlist);
       }}>Filter</button>
       
        <div className="cardcontiner">
        {filobj.map((res) =><Link key={res.info.id} to={"restaurant/"+res.info.id}> <Card   regdata = {res.info} /></Link>)}
           
        </div>
       </div>
      
    );
  



  }

  export default Body;