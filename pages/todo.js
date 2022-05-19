import InputElement from "../components/InputElement"
import TodoRendering from "../components/TodoRendering"
import prisma from "lib/prisma"
import { useDispatch } from "react-redux"
import { todoActions } from "../features/todoSlice"


const Todo = ({todos}) => {
    const dispatch = useDispatch()
    dispatch(todoActions.hydrateTodos(todos))

    console.log(todos)
    return (
        <>
            <h1>Todo app</h1>
            <InputElement />
            <TodoRendering />
        </>
    )
}

export default Todo

export const getServerSideProps = async () => {
    const todos = await prisma.todos.findMany()
    return { props: {todos} }
  }