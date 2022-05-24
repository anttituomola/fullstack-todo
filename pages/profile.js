import { useSession } from "next-auth/react"
import { useState } from "react"
import { changePassword } from "features/apiCalls"

const Profile = () => {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handlePasswordChange = async (event) => {
    event.preventDefault()
    if (newPassword !== confirmPassword) {
      return alert("Passwords do not match")
    }
    changePassword(oldPassword, newPassword)
  }

  const { data: session, status } = useSession()
  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "authenticated") {
    return (
      <div className="container">
        <p>You have logged in with email <strong>{session.user.email}</strong></p>
        <h2>Change password</h2>
        <form onSubmit={handlePasswordChange} method="POST" className="profile">
          <label htmlFor="oldPassword">Old password</label>
          <input type="password" placeholder="Old password" id="oldPassword"
            onChange={(event) => setOldPassword(event.target.value)} value={oldPassword} />
          <label htmlFor="newPassword">New password</label>
          <input type="password" placeholder="New password" id="newPassword"
            onChange={(event) => setNewPassword(event.target.value)} value={newPassword} />
          <label htmlFor="confirmPassword">Confirm new password</label>
          <input type="password" placeholder="Confirm new password" id="confirmPassword"
            onChange={(event) => setConfirmPassword(event.target.value)} value={confirmPassword} />
          <button type="submit">Change password</button>
        </form>
      </div>

    )
  }
  if (!session) {
    window.location.href = "/login"
  }
}

export default Profile