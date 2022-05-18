import { useState } from "react"
import { signIn } from "next-auth/react"

const Login = () => {
  const [isCreatingNewAccount, setIsCreatingNewAccount] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = async (event) => {
    event.preventDefault()
    if (isCreatingNewAccount) {
      try {
        const result = await createUser(email, password)
      } catch (error) {
        console.log(error)
      }
    } else {
      const result = await signIn("credentials", { 
        redirect: false,
        email: email,
        password: password
      })
      console.log(result)
  }
}

  const createUser = async () => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message)
    }

    return data
  }

  return (
    <>
      {isCreatingNewAccount ? <h1>Create new account</h1>: <h1>Login</h1>}
      <form onSubmit={submitHandler} className="loginForm">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={(event) => setEmail(event.target.value)} />
        <label htmlFor="password">Password</label>
        <input className="passwordInput" type={showPassword ? "text" : "password"} id="password" onChange={(event) => setPassword(event.target.value)} />
        <img className="hideIcon" src="/hide.png" alt="Show or hide password" onClick={() => setShowPassword(!showPassword)} />
        <button type="submit">{isCreatingNewAccount ? "Create account" : "Login"}</button>
      </form>
      {isCreatingNewAccount ?
        <p className="toggleSignin" onClick={() => setIsCreatingNewAccount(false)}>Already have account? Sign in instead!</p> :
        <p className="toggleSignin" onClick={() => setIsCreatingNewAccount(true)}>Don&apos;t have an account? Create one!</p> }
    </>
  )
}


export default Login