import React, { useState } from "react";
import BookList from "./Components/BookList";
import BookForm from "./Components/BookForm";

const App = () => {

  const [bookToEdit, setBookToEdit] = useState(null);
  const handleEdit = (book) => {
    setBookToEdit(book)
  };
  const handleCancel = () => {
    setBookToEdit(null)
  };

  return (
    <div>
      <BookForm onCancel={handleCancel} bookToEdit={bookToEdit}></BookForm>
      <br />
      <BookList onHandleEdit={handleEdit}></BookList>
    </div>
  );
};

export default App;
