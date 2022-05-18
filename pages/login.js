import { useState } from "react"

const Login = () => {
  const [isCreatingNewAccount, setIsCreatingNewAccount] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      {isCreatingNewAccount ? <h1>Login</h1> : <h1>Create new account</h1>}
      <form action="" className="loginForm">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input className="passwordInput" type={showPassword ? "text" : "password"} id="password" />
        <img className="hideIcon" src="/hide.png" alt="Show or hide password" onClick={() => setShowPassword(!showPassword)}/>
        <button type="submit">{isCreatingNewAccount ? "Login" : "Create account"}</button>
      </form>
      {isCreatingNewAccount ? 
        <p className="toggleSignin" onClick={() => setIsCreatingNewAccount(false)}>Already have account? Sign in instead!</p> : 
        <p className="toggleSignin" onClick={() => setIsCreatingNewAccount(true)}>Don't have an account? Create one!</p>}
    </>
  )
}

export default Login