import React from 'react';
import BookList from './Components/BookList';
import BookForm from './Components/BookForm';

const App = () => {
  return (
    <div>
      <BookForm></BookForm>
      <br />
      <BookList></BookList>
    </div>
  );
}

export default App;
