import { IMG_URL } from "../utils/constant";
const Card = (props) => {
    const {regdata} = props;

  
    return (
      
      <div className="m-4 p-4 w-[250px] shadow-lg hover:bg-gray-300 rounded-lg">
      <img className="rounded-lg" src={IMG_URL+regdata.cloudinaryImageId} alt={props.name} />
     <h3>{regdata.name}</h3>
     <h4>{regdata.locality}</h4>
     <h4>{regdata.costForTwo}</h4>
     <h4>{regdata.avgRatingString}</h4>
      </div>
     
    );
  
  }

  export default Card;