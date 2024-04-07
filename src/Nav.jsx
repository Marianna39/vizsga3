import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='navbar bg-dark'>
        <div className='container-fluid'>
            <Link className="btn btn-dark" to="/">Főoldal</Link>
            <Link className="btn btn-dark" to="/scifi">Sci-fi</Link>
            <Link className="btn btn-dark" to="/humor">Humor</Link>
        </div>
    </nav>
  )
}
