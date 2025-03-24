import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../features/bookSlice";

const BookForm = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: 0,
    quantity: 0,
  });

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ id: nanoid(), ...book });
    dispatch(addBook({ ...book, id: nanoid() }));
  };
  return (
    <div>
      <h2>Book Form </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={book.title}
          onChange={handleChange}
          id=""
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          id=""
          required
        />
        <input
          type="number"
          value={book.price}
          onChange={handleChange}
          name="price"
          placeholder="price"
          id=""
          required
        />
        <input
          type="number"
          value={book.quantity}
          onChange={handleChange}
          name="quantity"
          placeholder="quantity"
          id=""
          required
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default BookForm;
