import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos}/>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
