import { useState } from "react"
import { v4 as uuid } from "uuid"
import dayjs from "dayjs"
import { useDispatch } from "react-redux"
import { todoActions } from "../features/todoSlice"

const InputElement = () => {
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(todoActions.addTodo({
            text: inputValue,
            id: uuid(),
            date: dayjs().unix(),
            completed: false
        })
        )
        setInputValue("")
    }


    return (
        <>
            <input type="text" onChange={(event) => setInputValue(event.target.value)} value={inputValue} />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default InputElement