import "./BookSectionFilter.scss";
import React from "react";
import BookSectionList from "../BookSectionList/BookSectionList";
import { useState, useEffect, useCallback } from "react";
import InputMask from "react-input-mask";

export default function BookSectionFilter() {
  const languages = ["en", "ru", "fr", "fi", "es", "ch", "da"];
  const [loading, setLoading] = useState(false);
  const [buttonsState, setButtonsState] = useState("");
  const [listBook, setListBook] = useState(0);
  const [inputState, setInputState] = useState("");
  const [filter, setFilter] = useState({
    lang: languages[0],
    author: "",
    search: false,
  });
  const countPage = Math.ceil(listBook.count / 32);

  async function searchBooks(author, lang, state = "", pageNumber = 1, event) {
    console.log("startSeacrh");
    console.log(event);
    let pageNumberSearch;
    if (state == "input") {
      pageNumberSearch = event.target.value.replaceAll("_", "");
      console.log(event.target.value);
    } else if (state == "newFilter") {
      setInputState("1");
      pageNumberSearch = pageNumber;
    } else if (state != "newFilter" && state != "") {
      setInputState(pageNumber);
      pageNumberSearch = pageNumber;
    } else {
      pageNumberSearch = pageNumber;
    }
    // if(Number(pageNumberSearch) > countPage) {
    //   pageNumberSearch = countPage
    // }
    setButtonsState(state);
    const queryLang = lang;
    const queryAuthor = (author + "").replace(" ", "%20");
    const url = `https://gutendex.com/books/?languages=${queryLang}&search=${queryAuthor}&page=${pageNumberSearch}`;
    console.log(url);
    setLoading(true);
    setFilter((prev) => ({ ...prev, search: true }));
    const response = await fetch(url);
    const books = await response.json();
    console.log(`filter ${filter.lang}`);
    setListBook(books);
    setLoading(false);
  }

  function changeInputState(event) {
    let pageNumber = event.target.value.replaceAll("_", "");
    if (Number(pageNumber) > countPage) {
      pageNumber = countPage;
    }
    if (Number(pageNumber) === 0) {
      pageNumber = "1";
    }
    setInputState(pageNumber);
  }

  // console.log(`listBook ${listBook}`);

  // console.log(listBook);

  // console.log(countPage);

  return (
    <>
      <h3>Список книг</h3>
      <div className="div">
        <div>
          <label>Фильтр по языку</label>
          <select
            value={filter.lang}
            onChange={(event) =>
              setFilter((prev) => ({ ...prev, lang: event.target.value }))
            }
          >
            {languages.map((el) => (
              <option value={el} key={el}>
                {el}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Фильтр по автору</label>
          <input
            type="text"
            value={filter.author}
            onChange={(event) =>
              setFilter((prev) => ({ ...prev, author: event.target.value }))
            }
          ></input>
        </div>
        <button
          onClick={() => searchBooks(filter.author, filter.lang, "newFilter")}
        >
          искать
        </button>
        {/* <button>искать</button> */}
      </div>

      {loading && <p>Грузим книги</p>}
      {!loading && filter.search && <BookSectionList listBook={listBook} />}
      {!loading && listBook.count > 32 && (
        <div className="toggle">
          <button
            className={
              buttonsState === "first" ? "buttonToggle active" : "buttonToggle"
            }
            onClick={() => searchBooks(filter.author, filter.lang, "first", 1)}
          >
            1
          </button>
          <InputMask
            mask="9999"
            maskChar="_"
            value={inputState}
            className={
              buttonsState === "input" ? "inputToggle active" : "inputToggle"
            }
            onBlur={(event) =>
              searchBooks(filter.author, filter.lang, "input", 1, event)
            }
            onChange={changeInputState}
          />
          <button
            className={
              buttonsState === "last" ? "buttonToggle active" : "buttonToggle"
            }
            onClick={() =>
              searchBooks(filter.author, filter.lang, "last", countPage)
            }
          >
            {countPage}
          </button>
        </div>
      )}
      {!loading && listBook.count === 0 && <p>Ничего не нашлось</p>}
    </>
  );
}
