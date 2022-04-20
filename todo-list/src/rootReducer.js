import { v4 as uuidv4 } from 'uuid'

const INITIAL_STATE = { todos: [] }

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, { task: action.task, id: uuidv4() }] }

    case 'UPDATE_TODO':
      const todos = state.todos.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, task: action.updateTask }
        }
        return todo
      })
      return { ...state, todos }

    case 'DELETE_TODO':
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.id) }

    default:
      return state
  }
}

export default rootReducer
