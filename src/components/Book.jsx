import React from "react";
import { useState } from "react";
import "./Book.css";

function Book(props) {
  let [isUpdating, setIsUpdating] = useState(false);

  let [updatedId, setUpdatedId] = useState(props.id);
  let [updatedTitle, setUpdatedTitle] = useState(props.title);
  let [updatedAuthor, setUpdatedAuthor] = useState(props.author);
  let [updatedPrice, setUpdatedPrice] = useState(props.price);

  // isUpdating variable = false
  // now isUpdating is true
  function handleUpdate() {
    let book;

    if (isUpdating == true) {
      book = {
        id: updatedId,
        title: updatedTitle,
        author: updatedAuthor,
        price: updatedPrice,
      };

      fetch(`http://localhost:8000/books/${props.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      }).then(() => {
        let newBooks = [...props.books];

        newBooks.map((element, idx) => {
          if (element.id == book.id) {
            newBooks.splice(idx, 1, book);
          }
        });

        props.setBooks(newBooks);
        setIsUpdating(false);
      });
    } else {
      setIsUpdating(true);
    }
  }
  /*
function handleUpdate() {
        let book;

        if (isUpdating) {
            book = {
                id: updatedId,
                title: updatedTitle,
                author: updatedAuthor,
                price: updatedPrice
            };

            fetch(`http://localhost:8000/books/${props.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update book');
                }
                return response.json();
            })
            .then(updatedBook => {
                let newBooks = props.books.map(element => 
                    element.id === updatedBook.id ? updatedBook : element
                );
                props.setBooks(newBooks);
                setIsUpdating(false);
            })
            .catch(error => {
                console.error('Error updating book:', error);
            });
        } else {
            setIsUpdating(true);
        }
    }
*/

  function handleIdChange(event) {
    setUpdatedId(event.target.value);
  }

  function handleTitleChange(event) {
    setUpdatedTitle(event.target.value);
  }

  function handleAuthorChange(event) {
    setUpdatedAuthor(event.target.value);
  }

  function handlePriceChange(event) {
    setUpdatedPrice(event.target.value);
  }

  return (
    <div id="book-container">
      {isUpdating ? (
        <input
          type="text"
          id="input-data1"
          className="input-data"
          onChange={handleIdChange}
          value={updatedId}
        />
      ) : (
        <span id="container-data1" className="book-data">
          {props.id}
        </span>
      )}

      {isUpdating ? (
        <input
          type="text"
          id="input-data2"
          className="input-data"
          onChange={handleTitleChange}
          value={updatedTitle}
        />
      ) : (
        <span id="container-data2" className="book-data">
          {props.title}
        </span>
      )}

      {isUpdating ? (
        <input
          type="text"
          id="input-data3"
          className="input-data"
          onChange={handleAuthorChange}
          value={updatedAuthor}
        />
      ) : (
        <span id="container-data3" className="book-data">
          {props.author}
        </span>
      )}

      {isUpdating ? (
        <input
          type="text"
          id="input-data4"
          className="input-data"
          onChange={handlePriceChange}
          value={updatedPrice}
        />
      ) : (
        <span id="container-data4" className="book-data">
          {props.price}
        </span>
      )}

      <button
        id="remove-btn"
        className="btn"
        onClick={() => {
          props.handleRemove(props.id);
        }}
      >
        Remove
      </button>
      <button id="update-btn" className="btn" onClick={handleUpdate}>
        {" "}
        {isUpdating ? "Save" : "Update"}{" "}
      </button>
    </div>
  );
}
export default Book;
