import { RES_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
    //console.log(props);
    const resData = props;
    //console.log(props.resData.title);
    //console.log(resData);
    return (
        <div className='res-card'>
            <img className='res-logo' src={RES_LOGO + props.resData.cloudinaryImageId}/>
            <h4 className="res-title">{props.resData.name}</h4>
            <div className="res-cost-avg">
                <h5>{props.resData.costForTwo}</h5>
                <h5>{props.resData.avgRating} stars</h5>
            </div>
            <h5>{props.resData.cuisines.join(", ")}</h5>
        </div>
    );
}

export default RestaurantCard;

// {
//     "id":"res1",
//     "title":"Food Circles",
//     "image":"http://res.cloudinary.com/simpleview/image/upload/v1438123960/clients/grandrapids/file_bcf11a47-7451-464f-8c4d-c9d3e85e9146.png",
//     "minCharge":"5.00 LE",
//     "rating":"2",
//     "titlMC":"foodCirclesMenuCat",
//     "url_menucat":"https://gist.github.com/omar94hamza/95723a43bb97f21567c99948c31dc7aa/raw/d09556d7f9591c9ac36d499a48c82d0012589a03/foodcirclesmenucat.json",
//     "type":["Chicken", "Meat"]
// },

// {
//     "id": "55473",
//     "name": "Pizza Hut",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/d281ae33-578d-482f-a4e2-8cf0d8ee3d58_55473.jpg",
//     "costForTwo": 350,
//     "cuisines": [
//         "Pizzas"
//     ],
//     "avgRating": 4.1,
//     "deliveryTime": 28,

// },