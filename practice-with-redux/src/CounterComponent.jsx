import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementAction, decrementAction, resetAction, incrementByValue } from "./App"; // Import actions from App.js

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => dispatch(incrementAction())}>Increment</button>
      <button onClick={() => dispatch(decrementAction())}>Decrement</button>
      <button onClick={() => dispatch(resetAction())}>Reset</button>
      <button onClick={() => dispatch(incrementByValue(5))}>Increment by 5</button>
    </div>
  );
};

export default Counter;
