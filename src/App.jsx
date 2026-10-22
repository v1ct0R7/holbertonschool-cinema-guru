import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userUsername, setUserUsername] = useState("")

  useEffect(() => {
const checkAuthentication = async () => {
const accessToken = localStorage.getItem('accessToken')

  if (!accessToken) {
    return
  }

  try {
    const response = await axios.post(
      '/api/auth/',
      {},
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    )

    setIsLoggedIn(true)
    setUserUsername(response.data.username)
  } catch (error) {
    console.error('Authentication failed:', error)
    setIsLoggedIn(false)
    setUserUsername('')
  }
}

checkAuthentication()

}, [])

return (
<div className="App">
{isLoggedIn ? (
<Dashboard userUsername={userUsername} />
) : (
<Authentication />
)}
</div>
)
}

export default App