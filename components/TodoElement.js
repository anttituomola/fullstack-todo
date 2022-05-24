import { useDispatch } from "react-redux"
import { todoActions } from "features/todoSlice"

const TodoElement = (props) => {
    const dispatch = useDispatch()
    const todo = props.todo
    return (
        <div key={todo.id}>
            <p>
                {todo.text}
                <input type="checkbox" checked={todo.completed} onChange={() => dispatch(todoActions.toggleTodo(todo.id))} />
                <button onClick={() => dispatch(todoActions.deleteTodo(todo.id))}>Delete</button>
            </p>
        </div>
    )
}

export default TodoElement