import React from 'react'
import Videosection from './videosection'
import Navbar from './Navbar'
import Yplaylist from './fetches/yplaylist'
import { Link, Outlet } from 'react-router-dom'
export default function VideoApp() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
