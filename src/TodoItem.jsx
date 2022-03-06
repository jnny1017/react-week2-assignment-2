export default function TodoItem({ todo: { id, title }, onClick }) {
  return (
    <li>
      {title}
      <button
        type="button"
        onClick={() => onClick(id)}
      >
        완료
      </button>
    </li>
  );
}
