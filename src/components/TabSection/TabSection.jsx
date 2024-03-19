import React from "react";
// import classes from "./TabSection.module.scss";
import { useState } from "react";
import Button from "../Button/Button";
import { styled } from 'styled-components';

const SectionContainer = styled.section`
  margin-top: 10px;
  align-items: center;
  text-align: center;
  .button:hover {
      opacity: 0.8;
  }
  .button.active {
      background: #126116;
      color: #fff;
  }
`

export default function TabSection(props) {

  const [tabState, setTabState] = useState('bookAPI');

  function handleClick(par) {
    setTabState(par);
    props.onChange(par);
  }

  return (
    <SectionContainer>
      <Button isActive={tabState === 'main'} onClick={()=>handleClick('main')}>Главная</Button>
      <Button isActive={tabState === 'feedback'} onClick={()=>handleClick('feedback')}>Обратная связь</Button>
      <Button isActive={tabState === 'effect'} onClick={()=>handleClick('effect')}>прост модалка</Button>
      <Button isActive={tabState === 'bookAPI'} onClick={()=>handleClick('bookAPI')}>АПИ книг, список с фильтрами</Button>
    </SectionContainer>
  );
}
