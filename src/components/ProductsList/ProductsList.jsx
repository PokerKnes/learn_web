import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

export default function ProductsList(props) {
  return (
    <div>
      <h2>Список товаров</h2>
      <ul>
        {props.phone.map(function (item) {
          return (
            <li key={item.id}>
              <NavLink to={`/products/${item.id}`}>{item.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
