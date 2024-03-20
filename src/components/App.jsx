import React from "react";
import * as ReactDOM from "react-dom/client";
import Header from "./Header/Header";
import TabSection from "./TabSection/TabSection";
import EffectSection from "./EffectSection/EffectSection";
import BookSectionFilter from "./BookSectionFilter/BookSectionFilter";
import Main from "./Main/Main";
import { useState, useRef, useEffect } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import FeedBackSection from "./FeedBackSection/FeedBackSection";
import Button from "./Button/Button";
import logo from "../images/logo.svg";
import Nav from "./Nav/Nav";
import Products from "./Products/Products";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import Phone from "./Phone/Phone";
import Tablet from "./Tablet/Tablet";
import Productslist from "./Productslist/Productslist";

export default function App() {
  const [tabChoised, setTabChoised] = useState("bookAPI");

  const phones =[
    {id: 1, name: "Apple iPhone 12 Pro"}, 
    {id: 2, name: "Google Pixel 5"}, 
    {id: 3, name: "Huawei P40 Pro"} 
];

console.log(phones)

function Product(){
  // получаем параметры
  const params = useParams();
  console.log(params)
  const prodId = params.id;
  const phone = phones.find(p=>p.id == prodId);
  if(phone===undefined)
      return <h2>Товар не найден</h2>;
  else
      return <h2>Товар {phone.name}</h2>;
}

  return (
    <>
      {/* <Header />
      <TabSection onChange={(current)=> setTabChoised(current)}/>
      {tabChoised === "main" && <Main />}
      {tabChoised === "feedback" && <FeedBackSection />}
      {tabChoised === "effect" && <EffectSection />}
      {tabChoised === "bookAPI" && <BookSectionFilter />} */}

      <BrowserRouter>
        <div>
          <Nav kek={{first: "/", second: "/products"}}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />}>
              <Route index element={<Productslist phone={phones} />} />
              <Route path=":id" element={<Product />} />
            </Route>
            <Route
              path="*"
              element={
                <>
                  <Header />
                  <TabSection onChange={(current) => setTabChoised(current)} />
                  {tabChoised === "main" && <Main />}
                  {tabChoised === "feedback" && <FeedBackSection />}
                  {tabChoised === "effect" && <EffectSection />}
                  {tabChoised === "bookAPI" && <BookSectionFilter />}
                </>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
