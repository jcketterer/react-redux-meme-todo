import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [formData, setFormData] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(formData)
    setFormData('')
  }

  const handleChange = e => {
    setFormData(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task:</label>
        <input type="text" name="task" onChange={handleChange} value={formData} />
        <button>Add Your Todo!</button>
      </form>
    </div>
  )
}

export default TodoForm
