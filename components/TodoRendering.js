import { useSelector, useDispatch } from "react-redux"
import { todoActions } from "../features/todoSlice"
import { useSession } from "next-auth/react"

const TodoRendering = () => {
  const { data: session, status } = useSession()
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()

  let userId = "null"
  if (session) {
    userId = session.user.email
  }

  const personalTodos = todos.filter(todo => todo.userId === userId)

  if (status === "loading") {
    return <div className="bouncing-loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  }

  if (status === "authenticated") {
    window.location.href = "/todo"
  }

  const renderTodos = personalTodos?.map(todo => {
    return (
      <div key={todo.id}>
        <p>
          {todo.text}
          <input type="checkbox" checked={todo.completed} onChange={() => dispatch(todoActions.toggleTodo(todo.id))} />
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
