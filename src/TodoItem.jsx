import React from 'react';

export default function TodoItem({
  text,
  onClick,
}) {
  return (
    <li>
      {text}
      <button type="button" onClick={onClick}>완료</button>
    </li>
  );
}