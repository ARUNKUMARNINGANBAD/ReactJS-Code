import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';


export const swiggyURL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9261103&lng=77.4848359&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

 const Restaurant = () => {

  const resid = useParams();
  console.log(resid);

  const [restcau,setrestcau] = useState(null);
console.log(useState());
  useEffect(()=>{
fetchres();
  },[])

  async function fetchres(){
   const data  = await fetch(swiggyURL);
   const json = await data.json();

   setrestcau(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
   //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info)
   
  }
  


  return (
    <>
    <h3>{}</h3>
    <div>Restaurant menu</div>
    </>
  )
}

export default Restaurant;