import React from "react";
import Header from "./Header/Header";
import TabSection from "./TabSection/TabSection";
import EffectSection from "./EffectSection/EffectSection";
import BookSectionFilter from "./BookSectionFilter/BookSectionFilter";
import Main from "./Main/Main";
import { useState, useRef, useEffect } from "react";
import FeedBackSection from "./FeedBackSection/FeedBackSection";
import Button from "./Button/Button";
import logo from "../images/logo.svg";

export default function App() {
  const [tabChoised, setTabChoised] = useState('bookAPI');
  
  return (
    <>
      <Header />
      <TabSection onChange={(current)=> setTabChoised(current)}/>
      {tabChoised === "main" && <Main />}
      {tabChoised === "feedback" && <FeedBackSection />}
      {tabChoised === "effect" && <EffectSection />}
      {tabChoised === "bookAPI" && <BookSectionFilter />}
    </>
  );
}
