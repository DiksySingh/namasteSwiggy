import { useState } from "react";
import { HEADER_LOGO } from "../utils/constants";
const Header = () => {
    const [btnName, setBtnName] = useState("Login")
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={HEADER_LOGO}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className='login-btn' onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;