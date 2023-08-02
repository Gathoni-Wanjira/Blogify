import React from 'react'

function Sort() {
  return (
    <div className='sort'>
       <select>
        <option value = "Category">Category</option>
        <option value = "Environment">Environment</option>
        <option value = "Interior design">Interior design</option>
        <option value = "Technology">Technology</option>
        <option value = "Advice">Advice</option>
        <option value = "Programming">Programming</option>
        <option value = "Farming">Farming</option>
        <option value = "Animals">Animals</option>
        <option value = "Energy">Energy</option>
        <option value = "Food">Food</option>
       </select>
        <button>New</button>
        <button>Top</button>
    </div>
  )
}

export default Sort
