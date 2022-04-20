import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TodoForm from './TodoForm'
import Todo from './Todo'

const TodoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)

  const addTodo = task => {
    dispatch({
      type: 'ADD_TODO',
      task,
    })
  }

  const updateTodo = (id, updateTask) => {
    dispatch({
      type: 'UPDATE_TODO',
      id,
      updateTask,
    })
  }

  const deleteTodo = id => {
    dispatch({ type: 'DELETE_TODO', id })
  }
  const todoRendered = todos.map(todo => (
    <Todo
      deleteTodo={deleteTodo}
      id={todo.id}
      key={todo.id}
      task={todo.task}
      updateTodo={updateTodo}
    />
  ))

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <ul>{todoRendered}</ul>
    </div>
  )
}

export default TodoList
