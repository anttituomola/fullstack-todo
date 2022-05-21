import Link from "next/link"
import styles from "../../styles/Navbar.module.css"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import { todoActions } from "features/todoSlice"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"

const Navbar = () => {
    const { data: session, status } = useSession()
    const dispatch = useDispatch()
    const router = useRouter()
    console.log(router.pathname)

    return (
        <div className={styles.navbar   }>
            <nav>
                <ul className={styles.navlist}>
                    <li><Link href="/"><a className={router.pathname === "/" && styles.currentLocation}>Home</a></Link></li>
                    <li><Link href="/todo"><a className={router.pathname === "/todo" && styles.currentLocation}>Todo app</a></Link></li>
                    {session && <li><Link href="/profile"><a className={router.pathname === "/profile" && styles.currentLocation}>Profile</a></Link></li>}
                    <li><Link href="/about"><a className={router.pathname === "/about" && styles.currentLocation}>About</a></Link></li>
                    {session ?
                        <li><span className={styles.link} onClick={() => signOut({ callbackUrl: "/" })}>Log out</span></li> :
                        <li><Link href="/login">
                            <a className={router.pathname === "/login" ? styles.currentLocation : styles.link}
                                onClick={() => dispatch(todoActions.isCreatingNewAccount(false))}>Login</a>
                        </Link> / &nbsp;
                            <Link href="/login">
                                <a className={router.pathname === "/login" ? styles.currentLocation : styles.link}
                                    onClick={() => dispatch(todoActions.isCreatingNewAccount(true))}>Create account</a>
                            </Link></li>
                    }
                </ul>
            </nav>
        </div>)
}

export default Navbar