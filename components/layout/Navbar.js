import Link from "next/link"
import styles from "../../styles/Navbar.module.css"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import { todoActions } from "features/todoSlice"
import { useDispatch } from "react-redux"

const Navbar = () => {
    const { data: session, status } = useSession()
    const dispatch = useDispatch()

    return (
        <div>
            <nav>
                <ul>
                    <li><Link href="/todo">Todo app</Link></li>
                    {session ? 
                    <li><span className={styles.link} onClick={() => signOut({ callbackUrl: "/" })}>Log out</span></li> :
                    <li><Link href="/login"><span className={styles.link} onClick={() => dispatch(todoActions.isCreatingNewAccount(false))}>Login</span></Link> / &nbsp;
                    <Link href="/login"><span className={styles.link} onClick={() => dispatch(todoActions.isCreatingNewAccount(true))}>Create account</span></Link></li>    
                }
                    {session && <li><Link href="/profile">Profile</Link></li>}
                    <li><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </div>)
}

export default Navbar