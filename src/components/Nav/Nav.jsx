import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav>
      <ul>
        <li>
          {/* <Link to={props.kek.first}>Главная</Link> */}
          <NavLink to={props.kek.first} className={({ isActive }) =>(isActive ? " active" : "")}>Главная</NavLink> 
        </li>
        <li>
          {/* <Link to={props.kek.second}>Товары</Link> */}
          <NavLink to={props.kek.second} className={({ isActive }) => (isActive ? " active" : "")}>Товары</NavLink>
        </li>
      </ul>
    </nav>
  );
}

{/* <NavLink to="/" className={({ isActive }) =>(isActive ? " active" : "")}>Главная</NavLink>  
                    <NavLink to="/about" className={({ isActive }) => (isActive ? " active" : "")}>О сайте</NavLink>  
                    <NavLink to="/products" className={({ isActive }) => (isActive ? " active" : "")}>Товары</NavLink> */}