import { useState, useContext } from "react";
import Logo from '../Images/Food Fire Logo.png'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {

    const [btnNameReact, setBtnNameReact ] = useState("Login")

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);
    console.log(loggedInUser);

    // If no dependency array => useEffect is called on every render
    // If dependency array is empty = [] => useEffect is called on initial render(just once)
    // If dependency array is [btnNameReact] => called everytime btnNameReact is updated

    // useEffect(() => {
        
    // }, []);

    // Selector

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);


    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-28" src={Logo} alt="Food Fire Logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart ({cartItems?.length} items)</Link></li>
                    <button className='login' onClick={()=> {
                        btnNameReact === "Login"
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login")
                    }}>
                        {btnNameReact}
                    </button>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;