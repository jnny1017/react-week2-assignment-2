import Input from './Input';
import Button from './Button';

export default function TodoForm({ todoTitle, onChangeTitle, onClickAddTodo }) {
  return (
    <form>
      <Input
        placeholder="할 일을 입력해주세요."
        value={todoTitle}
        onChange={onChangeTitle}
      />
      <Button onClick={onClickAddTodo}>
        추가
      </Button>
    </form>
  );
}
