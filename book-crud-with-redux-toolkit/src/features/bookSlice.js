import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: 1,
      title: "X",
      author: "Anisul",
      price: 12,
      quantity: 15,
    },
    {
      id: 2,
      title: "Y",
      author: "Fariha",
      price: 20,
      quantity: 25,
    },
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    deleteBook : (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
    addBook: (state,action)=>{
        state.books.push(action.payload)
    }
  },
});
export const { deleteBook,addBook } = bookSlice.actions;
export default bookSlice.reducer;
