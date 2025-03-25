//state -count -0
// action-increment,decrement,reset
// reducer
// store
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Counter from "./CounterComponent";

// constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

export const initialState = {
  count: 0,
};

export const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};
export const incrementByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};
export const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};
export const resetAction = () => {
  return {
    type: RESET,
  };
};

// creating reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

// creating store

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

store.subscribe(() => {
  console.log(store.getState());
});

const APP = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default APP;
