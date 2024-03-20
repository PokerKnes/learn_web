import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

export default function Products() {

  return (
    <div>
      <h2>Товары</h2>
      <Outlet />
    </div>
  );
}
