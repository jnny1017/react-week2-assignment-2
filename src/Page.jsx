import { useState } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function Page() {
  const [state, setState] = useState({
    newId: 100,
    todoTitle: '',
    todos: [],
  });

  const { newId, todoTitle, todos } = state;

  function handleChangeTitle(event) {
    setState({
      ...state,
      todoTitle: event.target.value,
    });
  }

  function handleClickAddTodo() {
    setState({
      ...state,
      newId: newId + 1,
      todoTitle: '',
      todos: [...todos, { id: newId, title: todoTitle }],
    });
  }

  function handleClickDone(id) {
    setState({
      ...state,
      todos: todos.filter((todo) => todo.id !== id),
    });
  }

  return (
    <>
      <h1>To-do</h1>
      <TodoForm
        todoTitle={todoTitle}
        onClickAddTodo={handleClickAddTodo}
        onChangeTitle={handleChangeTitle}
      />
      <TodoList
        todos={todos}
        onClickDone={handleClickDone}
      />
    </>
  );
}
