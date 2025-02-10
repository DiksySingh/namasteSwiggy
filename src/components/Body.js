import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    //Whenever state variables get updated, react triggers a reconciliation cycle (re-renders the component)
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
        setFilteredRestaurants(restaurants);
    }

    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div className='body'>
            <div className="search-container">
                <div className="search-input">
                    <input type="text" className="search" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                    <button
                        onClick={() => {
                            console.log(listOfRestaurants);
                            const filterResList = listOfRestaurants.filter((res) => {
                                return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            });
                            console.log(filterResList);
                            setFilteredRestaurants(filterResList);

                        }}> Search 
                    </button>
                </div>
                <div className='top-res-container'>
                    <button
                        className="top-res-btn"
                        onClick={() => {
                            const filteredResList = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
                            setFilteredRestaurants(filteredResList);
                        }}>Top Rated Restaurant</button>
                </div>
            </div>
            <div className='res-container'>
                {
                    filteredRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant?.info?.id} resData={restaurant.info} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;