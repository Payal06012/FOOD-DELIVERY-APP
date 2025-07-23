import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

    const [menu , setMenu] = useState("Home"); // set state varialiable
    const {totalCartAmount} = useContext(StoreContext);

  return (
    <div className ='navbar'>
        
        <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
            < Link to ='/' onClick={() =>setMenu("Home")} className = {menu === "Home" ? "active" : ""}>Home</ Link>
            < a href ="#exploreMenu" onClick={() =>setMenu("Menu")} className = {menu === "Menu" ? "active ": ""}>Menu</ a >
            < a href ="#App-download" onClick={() =>setMenu("Mobile-app")} className = {menu ===  "Mobile-app" ? "active": ""}>Mobile-app</ a  >
            < a href = "#Footer" onClick={() =>setMenu("Contact-us")} className = {menu === "Contact-us" ? "active" : ""}>Contact-us</a >
        </ul>

        
        
    <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
           <Link to ='/cart'><img src={assets.basket_icon} alt="" /></Link>
             <div className={!totalCartAmount() ? "" : "dot"}></div>
        </div>

        <button onClick={()=> setShowLogin(true)}>Sign in</button>


    </div>
      
    </div>
  )
}

export default Navbar
