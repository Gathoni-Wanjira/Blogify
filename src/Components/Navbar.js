import React from 'react'

function Navbar() {
  return (
    <div className='Navbar'>
        <ul>
            <li><i className="fa-solid fa-blog logo"></i></li>
            <li>Blogs</li>
            <li>Newsletters</li>
            <li>Resources</li>
            <li className = "search" ><input type='text' placeholder='search blog'  /> <i className="fa-solid fa-magnifying-glass"></i></li>
            <li><button className='addblogbtn'  data-bs-toggle="modal" data-bs-target="#exampleModal">Post Blog</button></li>
        </ul>

    </div>
  )
}

export default Navbar