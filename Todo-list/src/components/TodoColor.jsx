import { memo } from 'react';

const TodoColor = memo(function TodoColor({ handleTodoColor, selectedColor }) {
  const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'];

  return (
    <div className="colorOptions">
      {colors.map((color, index) => (
        <button
          key={index}
          className={`colorOption ${selectedColor === color ? 'selected' : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => handleTodoColor(color)}
        />
      ))}
    </div>
  );
});

export default TodoColor;
