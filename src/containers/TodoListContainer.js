import React, { useCallback } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { changeInput, insert, toggleCheck, remove } from "../modules/todos";
import TodoList from "../components/TodoList";

const TodoListContainer = () => {
  // todos 리듀서에서 관리하는 객체를 통째로 가져올 거라면 state.todos 로 간소화 시킬 수 있습니다.
  const { input, todos } = useSelector(state => state.todos, [shallowEqual]);

  const dispatch = useDispatch();

  const onChangeInput = useCallback(
    inputWord => dispatch(changeInput(inputWord)),
    [dispatch]
  );
  const onInsert = useCallback(targetId => dispatch(insert(targetId)), [
    dispatch
  ]);
  const onToggle = useCallback(targetId => dispatch(toggleCheck(targetId)), [
    dispatch
  ]);
  const onRemove = useCallback(targetId => dispatch(remove(targetId)), [
    dispatch
  ]);

  const onChange = useCallback(
    e => {
      onChangeInput(e.target.value);
    },
    [onChangeInput]
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      onInsert(input);
      onChangeInput("");
    },
    [input, onChangeInput, onInsert]
  );

  return (
    <TodoList
      input={input}
      todos={todos}
      onChange={onChange}
      onSubmit={onSubmit}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default TodoListContainer;
