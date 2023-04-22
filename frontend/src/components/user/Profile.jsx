import React from 'react'
import "./Profile.css"
const Profile = ({name,email}) => {
  return (
    <div className='profile-div card-container'>
        <p>{`Name: ${name} | Email: ${email}`}</p>
    </div>
  )
}

export default Profile