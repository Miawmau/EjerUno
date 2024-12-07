import React from 'react'
import Link from 'next/link'
import "./Headersini.css"
const Headersini = () => {
  return (
    <div className='header'>
        <Link href={"./home"}>
        <p>Home</p>
        </Link>
        <Link href={"/about"}>
        <p>About</p>
        </Link>
        <Link href={"/dashboard"}>
        <p>Dashboard</p>
        </Link>
    </div>
  )
}

export default Headersini