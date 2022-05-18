import { useSelector, useDispatch } from "react-redux"
import { todoActions } from "../features/todoSlice"

const TodoRendering = () => {
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()

  const renderTodos = todos?.map(todo => {
    return (
      <div key={todo.id}>
        <p>
          {todo.text}
          <input type="checkbox" checked={todo.completed} onChange={() => dispatch(todoActions.toggleTodo(todo.id))}/>
          <button onClick={() => dispatch(todoActions.deleteTodo(todo.id))}>Delete</button>
        </p>
      </div>
    )
  })

  return (
    <>
      {renderTodos}
    </>
  )
}

export default TodoRendering