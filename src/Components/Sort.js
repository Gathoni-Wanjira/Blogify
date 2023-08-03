import React from 'react';

import Category from './Category';


function Sort({handleCategories}) {
  return (
    <div className='sort'>
        <Category handleCategories={handleCategories}/>
        <button>New</button>
        <button>Top</button>
    </div>
  )
}

export default Sort
