import { memo } from "react";

const TodoCard = memo(function TodoCard({ children, handleDeleteTodo, handleEditTodo, index, todoColor }) {
  return (
    <li className="todoItem" style={{ backgroundColor: todoColor }}>
      {children}
      <div className="actionsContainer">
        <button onClick={() => handleEditTodo(index)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
});

export default TodoCard;
