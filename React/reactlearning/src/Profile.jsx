import React from 'react'
import UserDetails from './UserDetails'

const Profile = ({user}) => {
  return (
    <div>
        <UserDetails user = {user}/>      
    </div>
  )
}

export default Profile
