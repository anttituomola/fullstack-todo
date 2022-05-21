import { useSession } from "next-auth/react"

const Profile = () => {
  const { data: session, status } = useSession()
  console.log(session)
  if (status === "loading") {
    return <p>Loading...</p>   
  }
  if (status === "authenticated") {
      return (
      <div>
        <h2>This is super secret profile page that you should not see if not logged in!</h2>
        <p>You have logged in with email <strong>{session.user.email}</strong></p>  
      </div>
      
    ) 
  }
  if (!session) {
      window.location.href = "/login"
  }
}

export default Profile