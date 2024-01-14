import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../../appwrite/auth'
import { logout } from '../../../store/authSlice'

const LogoutBtn = () => {
    const handleLogout = ()=>{
        authService.logout().then(() => {
            dispatch(logout());
        }).catch((err) => {
            console.log("Failed to log out :: " + err)
        });
    }
    const dispatch = useDispatch();
  return (
    <div className='flex items-center justify-start px-3'>
        <svg focusable="false" height="24" viewBox="0 0 24 24" width="24" className=" NMm5M"><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
    <button onClick={handleLogout} className='px-2 py-2 inline-block duration-200 rounded-full  text-black dark:text-white'>
        Sign out
    </button>
    </div>
  )
}

export default LogoutBtn
