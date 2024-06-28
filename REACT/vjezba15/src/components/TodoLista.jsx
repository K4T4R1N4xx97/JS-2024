import Todo from "./Todo";
import TodoStore from "../store/store";

const TodoLista = () => {
  const store = new TodoStore();

  return <Todo store={store} />;
};

export default TodoLista;