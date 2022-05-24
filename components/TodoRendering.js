import { useSelector, useDispatch } from "react-redux"
import { todoActions } from "../features/todoSlice"
import { useSession } from "next-auth/react"
import TodoElement from "./TodoElement"
import { v4 as uuid } from 'uuid'

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

  const renderTodos = personalTodos?.map(todo => {
    return (
      <div key={uuid()}>
        <TodoElement key={todo.id} todo={todo} />
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
