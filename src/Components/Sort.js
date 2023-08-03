import React from 'react';
import New from './New';
import Category from './Category';


function Sort({handleCategories, handleNew}) {
  return (
    <div className='sort'>
        <Category handleCategories={handleCategories}/>
        <New handleNew={handleNew}/>
        <button>Top</button>
    </div>
  )
}

export default Sort
