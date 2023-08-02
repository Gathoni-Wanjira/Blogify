import React from 'react'

function Navbar() {
  return (
    <div className='Navbar'>
        <ul>
            <li><i className="fa-solid fa-blog logo"></i></li>
            <li>Blogs</li>
            <li>Newsletters</li>
            <li>Resources</li>
            <li className = "search" ><input type='text' placeholder='search blog'  /> <i class="fa-solid fa-magnifying-glass"></i></li>
            <li><button className='addblogbtn'>Post Blog</button></li>
        </ul>

    </div>
  )
}

export default Navbar