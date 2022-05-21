import InputElement from "../components/InputElement"
import TodoRendering from "../components/TodoRendering"
import prisma from "lib/prisma"
import { useDispatch } from "react-redux"
import { todoActions } from "../features/todoSlice"
import { getSession } from "next-auth/react"

const Todo = ({todos}) => {
    const dispatch = useDispatch()
    
    dispatch(todoActions.hydrateTodos(todos))
    
    return (
        <>
            <h1>Todo app</h1>
            <InputElement />
            <TodoRendering />
        </>
    )
}

export default Todo

export const getServerSideProps = async (context) => {
    const session = await getSession({ req: context.req })
    if (!session) {
        return { props: { todos: [] } }
    }
    const todos = await prisma.todos.findMany({
        where: {
            userId: session.user.id
        }
    })
    return { props: {todos} }
  }