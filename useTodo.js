import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init) 
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos])

  const handleNewTodo = ( todo )=> {
    const action = {
      type: '[TODO] add todo',
      payload: todo,
    }
    dispatch(action);
  }

  const handleRemoveTodo = ( id )=> {
    const action = {
      type: '[TODO] remove todo',
      payload: id,
    }
    dispatch(action);
  }

  const handleToggleTodo = ( id )=> {
    const action = {
      type: '[TODO] toggle todo',
      payload: id,
    }
    dispatch(action);
  }

  const todoPendientes = () => {
    return (todos.filter(todo => !(todo.done))).length
  };
  
  const todoRealizadas = () => {
    return (todos.filter(todo => todo.done)).length
  };

 return({
  handleToggleTodo,
  handleNewTodo,
  handleRemoveTodo,
  todos,
  todoRealizadas,
  todoPendientes
 })
}
