import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.log(searchText);
    }, [searchText]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        console.log("jsonData", jsonData);
        const restaurants = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(restaurants);
        setListOfRestaurants(restaurants);
    }

    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div className='body'>
            <div className="search-container">
                <div className="search-input">
                    <input type="text" className="search" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                    <button
                        onClick={() => {
                            const filterResList = listOfRestaurants.filter((res) => {
                                //console.log(res.info.name.toLowerCase());
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            });
                            setListOfRestaurants(filterResList);
                        }}> Search 
                    </button>
                </div>
                <div className='top-res-container'>
                    <button
                        className="top-res-btn"
                        onClick={() => {
                            const filteredResList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                            setListOfRestaurants(filteredResList);
                        }}>Top Rated Restaurant</button>
                </div>
            </div>
            <div className='res-container'>
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant?.info?.id} resData={restaurant.info} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;