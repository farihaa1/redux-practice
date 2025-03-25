import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../features/bookSlice";

const BookList = ({onHandleEdit}) => {
  const books = useSelector((state) => state.booksRed.books);
  const dispatch = useDispatch();  
  const handleDelete = (id)=>{
        dispatch(deleteBook(id))
    }
  const handleEdit = (book)=>{
    onHandleEdit(book)
    }

  return (
    <div>
      <h2>List of Books</h2>
      {books && books.length > 0 ? (
        <ul
          style={{
            listStyle: "none",
          }}
        >
          {books.map((book) => (
            <Fragment key={book.id}>
              <li>{book.title}</li>
              <li>{book.author}</li>
              <li>{book.quantity}</li>
              <li>{book.price}</li>
              <div>
                <button onClick={()=>handleDelete(book.id)}>Delete</button>
                <button onClick={()=>handleEdit(book)}>Edit</button>
              </div>
              <br />
            </Fragment>
          ))}
        </ul>
      ) : (
        <p>No Book exist</p>
      )}
    </div>
  );
};

export default BookList;
