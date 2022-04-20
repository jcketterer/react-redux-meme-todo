import React, { useState } from 'react'

const Todo = ({ task, updateTodo, deleteTodo, id }) => {
  const [taskToEdit, setTaskToEdit] = useState(task)
  const [currEditing, setCurrEditing] = useState(false)

  const remove = () => {
    deleteTodo(id)
  }

  const editToggle = () => {
    setCurrEditing(e => !e)
  }

  const handleChange = e => {
    setTaskToEdit(e.target.value)
  }

  const doneEditing = e => {
    e.preventDefault()
    updateTodo(id, task)
    setCurrEditing(false)
  }

  if (currEditing) {
    return (
      <div>
        <form onSubmit={doneEditing}>
          <input type="text" value={taskToEdit} onChange={handleChange} />
          <button>Done Editing</button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <button onClick={editToggle}>Edit</button>
      <button onClick={remove}>X</button>
      <li>{taskToEdit}</li>
    </div>
  )
}

export default Todo
