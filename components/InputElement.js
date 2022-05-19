import { useState } from "react"
import { v4 as uuid } from "uuid"
import dayjs from "dayjs"
import { useDispatch } from "react-redux"
import { todoActions } from "../features/todoSlice"

const InputElement = () => {
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch()

    const listenForEnterKey = (event) => {
        if (event.key === "Enter") {
            handleSubmit()
        }
    }

    const handleSubmit = async () => {
        const todo = {
            text: inputValue,
            id: uuid(),
            date: dayjs().unix(),
            completed: false
        }
        dispatch(todoActions.addTodo(todo))
        setInputValue("")
    }

        return (
            <>
                <input type="text" 
                    onChange={(event) => setInputValue(event.target.value)} 
                    value={inputValue}
                    onKeyDown={listenForEnterKey}    
                />
                <button onClick={handleSubmit}>Submit</button>
            </>
        )
    }

    export default InputElement