import React, { useCallback } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import Counter from "./../components/Counter";
import { increment, decrement } from "../modules/counter";

const CounterContainer = () => {
  const counter = useSelector(state => state.counter, [shallowEqual]);
  const dispatch = useDispatch();

  const onIncrease = useCallback(counter => dispatch(increment(counter)), [
    dispatch
  ]);
  const onDecrease = useCallback(counter => dispatch(decrement(counter)), [
    dispatch
  ]);

  return (
    <Counter number={counter} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
