import Link from "next/link"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"

const Navbar = () => {
    const { data: session, status } = useSession()

    return (
        <div>
            <nav>
                <ul>
                    <li><Link href="/todo">Todo app</Link></li>
                    {session ? 
                    <li><span onClick={() => signOut({ callbackUrl: "/" })}>Log out</span></li> :
                    <li><Link href="/login">Login</Link></li>    
                }
                    <li><Link href="/profile">Profile</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </div>)
}

export default Navbar