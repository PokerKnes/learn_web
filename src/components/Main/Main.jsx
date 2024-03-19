import React from "react";
import { listContent } from "../../content/listContent";
import List from ".././List/List";
import { useState } from "react";
import Button from ".././Button/Button";

const buttonList = [
  {
    type: "first",
    description: "first",
  },
  {
    type: "second",
    description: "second",
  },
  {
    type: "third",
    description: "third",
  },
];

export default function Main() {
  const [contentType, setContent] = useState("Кнопка не нажата");
  // console.log(`contentType: ${contentType}`);
  // console.log('renderApp');

  function handleClick(type) {
    setContent(type);
  }

  return (
    <>
      <ul>
        {listContent.map((el) => (
          <List key={el.title} {...el} />
        ))}
      </ul>
      {buttonList.map((el) => (
        <Button
          isActive={contentType === el.type}
          key={el.type}
          onClick={() => handleClick(el.type)}
        >
          {el.description}
        </Button>
      ))}
    </>
  );
}
