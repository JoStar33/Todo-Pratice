import { GET_TODOS, POST_TODOS } from "constants/todoConstants";
import { Todos, PostedTodos } from "types/todos";
import { customAxios } from "./axios/customAxios";

const getTodos = () => {
  const todos = customAxios
    .get(GET_TODOS)
    .then((res) => res)
    .then((res) => res.data)
    .then((data: Todos[]) => data);
  return todos;
};

const postTodos = (postedTodos: PostedTodos) => {
  return customAxios.post(POST_TODOS, { todo: postedTodos });
};

export { getTodos, postTodos };
