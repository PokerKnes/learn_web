import React from "react"
import logo from "../../images/logo.svg"
import { useState, useEffect } from "react";
import { styled} from 'styled-components';

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
  img {
    width: 30px;
  }
`

export default function Header() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => {
      clearInterval(interval)
    }
  }, []);

  // setInterval(() => {
  //   setNow(new Date())
  // }, 1000);

  // console.log(now.toLocaleTimeString())

  return (
    <HeaderContainer>
      <img src={logo} alt="logo"></img>
      <span>Время: {now.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
