import React, { useContext } from 'react'
import { BlogContext } from '../context/BlogContext'
import Login from '../components/Login'
import AdminNavbar from '../components/AdminNavbar'
import CreateBlog from '../components/CreateBlog'

function Admin() {
  const {isAuthenticated} = useContext(BlogContext)
  return (
    <div>
      {
          !isAuthenticated ? <Login/> : <div className='w-full min-h-screen'>
            <AdminNavbar/>
            <CreateBlog/>
          </div>
      }
    </div>
  )
}

export default Admin
