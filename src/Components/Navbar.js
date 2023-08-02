import React from 'react';
import Search from './Search';

function Navbar({ OnSearch }) {
  
  return (
    <div className='Navbar'>
        <ul>
            <li><i className="fa-solid fa-blog logo"></i></li>
            <li>Blogs</li>
            <li>Newsletters</li>
            <li>Resources</li>
            <Search  OnSearch={OnSearch}/>
            <li><button className='addblogbtn'><a href='#showAddBlog'>Post Blog</a></button></li>
        </ul>

    </div>
  )
}

export default Navbar