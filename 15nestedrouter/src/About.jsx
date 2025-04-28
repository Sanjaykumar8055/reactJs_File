import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const About = () => {
  return (
    <>
    <nav>
        <Link to='team'>Team</Link> {' '}
        <Link to="history">History</Link>
    </nav>
    <Outlet />
    </>
  )
}

export default About 