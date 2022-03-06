import TodoItem from './TodoItem';

export default function TodoList({ todos, onClickDone }) {
  if (todos.length === 0) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <ol>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onClick={onClickDone}
        />
      ))}
    </ol>
  );
}
