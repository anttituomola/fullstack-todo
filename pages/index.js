import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useDispatch } from 'react-redux'
import { todoActions } from 'features/todoSlice'

export default function Home() {
  const dispatch = useDispatch()
  return (
    <div className="container">
      <h1>Fullstack todo app</h1>
      <p>You can <Link href="/todo"> try out the todo app</Link> without an account, but if you want to save your personal todos, please <Link href="/login">
        <span onClick={() => dispatch(todoActions.isCreatingNewAccount(true))}>create account</span></Link> or <Link href="/login"><span onClick={() => dispatch(todoActions.isCreatingNewAccount(false))}>login</span></Link>.</p>
    </div>
  )
}
