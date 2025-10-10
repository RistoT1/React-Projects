import TodoColor from "./TodoColor.jsx";

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue, todoColor } = props;


    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="enter todo..." />
            <TodoColor handleTodoColor={props.handleTodoColor} selectedColor={props.todoColor}/>
            <button onClick={() => {
                if (todoValue.trim() === '') {
                    return
                }
                handleAddTodos(todoValue, todoColor)
                setTodoValue('')
            }}>add
            </button>
        </header>
    );
}