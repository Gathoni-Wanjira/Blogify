import React from 'react';
import New from './New';
import Top from './Top';
import Category from './Category';


function Sort({handleCategories, handleNew, handleTop}) {
  return (
    <div className='sort'>
        <Category handleCategories={handleCategories}/>
        <New handleNew={handleNew}/>
        <Top handleTop={handleTop}/>
    </div>
  )
}

export default Sort
