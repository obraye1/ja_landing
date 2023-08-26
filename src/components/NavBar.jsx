import React from 'react'

const NavBar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className='text-4xl'>Blog</h1>
      </div>
      <div>
        <ul className="flex space-x-8 text-lg font-medium">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar