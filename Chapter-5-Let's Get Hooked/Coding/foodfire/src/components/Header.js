import { useState, useEffect } from 'react';
import Logo from '../Images/Food Fire Logo.png'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {

    const [btnNameReact, setBtnNameReact ] = useState("Login")

    const onlineStatus = useOnlineStatus();

    // If no dependency array => useEffect is called on every render
    // If dependency array is empty = [] => useEffect is called on initial render(just once)
    // If dependency array is [btnNameReact] => called everytime btnNameReact is updated

    // useEffect(() => {
        
    // }, []);


    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={Logo} alt="Food Fire Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className='login' onClick={()=> {
                        btnNameReact === "Login"
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login")
                    }}>
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
};

export default Header;