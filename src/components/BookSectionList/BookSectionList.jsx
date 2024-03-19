import "./BookSectionList.scss";
import React from "react";

export default function BookSectionList({listBook}) {

  return (
    <>
        <ul>
          {listBook.results.map((el) => (
            <li key={el.id}>
              <img src={el.formats['image/jpeg']} alt="обложка"/>
              <p>
                <strong>Название: {el.title}</strong>
              </p>
              {el.authors.length === 1 && <p>Автор: {el.authors[0].name} </p>}
              {el.authors.length > 1 && <p>Авторы: {el.authors.map((arrAuthors)=> arrAuthors.name).join('. ')} </p>}
              {el.subjects.length === 1 && <p>Тема: {el.subjects[0]} </p>}
              {el.subjects.length > 1 && <p>Темы: {el.subjects.join('. ')} </p>}
              <button><a href={el.formats['text/html']} target="_blank">скачать</a></button>
            </li>
          ))}
        </ul>
    </>
  );
}
