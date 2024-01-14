import React from 'react'
import LogoutBtn from './LogoutBtn'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const User = () => {
  const userData = useSelector(state => state.auth.userData)
  return (
    <>
<div id="dropdownAvatar" className=" z-10 absolute right-0  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>{userData.name}</div>
      <div className="font-medium truncate">{userData.email}</div>
    </div>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
      <li>
        <Link to="/accountsetting" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Account Setting</Link>
      </li>
    </ul>
    <div className="py-2">
        <LogoutBtn/>
    </div>
</div>

    </>
  )
}

export default User
