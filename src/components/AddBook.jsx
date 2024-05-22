import React, { useState } from "react";
import "./AddBook.css";

function AddBook(props) {
  let [enteredId, setEnteredId] = useState("");
  let [enteredTitle, setEnteredTitle] = useState("");
  let [enteredAuthor, setEnteredAuthor] = useState("");
  let [enteredPrice, setEnteredPrice] = useState("");

  function handleChangeId(event) {
    setEnteredId(event.target.value);
  }

  function handleChangeTitle(event) {
    setEnteredTitle(event.target.value);
  }

  function handleChangeAuthor(event) {
    setEnteredAuthor(event.target.value);
  }

  function handleChangePrice(event) {
    setEnteredPrice(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let book = {
      id: enteredId,
      title: enteredTitle,
      author: enteredAuthor,
      price: enteredPrice,
    };

    props.handleSubmit(book);

    setEnteredId("");
    setEnteredTitle("");
    setEnteredAuthor("");
    setEnteredPrice("");
  }
  return (
    <div className="form-container">
      <form className="form-div" onSubmit={handleSubmit}>
        id:{" "}
        <input
          type="text"
          id="id"
          className="input"
          onChange={handleChangeId}
          value={enteredId}
        ></input>
        Title:{" "}
        <input
          type="text"
          id="title"
          className="input"
          onChange={handleChangeTitle}
          value={enteredTitle}
        ></input>
        Author:{" "}
        <input
          type="text"
          id="author"
          className="input"
          onChange={handleChangeAuthor}
          value={enteredAuthor}
        ></input>
        Price:{" "}
        <input
          type="text"
          id="price"
          className="input"
          onChange={handleChangePrice}
          value={enteredPrice}
        ></input>
        <input type="submit" value="add" id="add-btn" />
      </form>
    </div>
  );
}
export default AddBook;
