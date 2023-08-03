import React from "react";


function Category({handleCategories}){



  
   






    return(
        <div className="Category">
            {/* function handleCategories is called everytime the select option is changed */}
            <select onChange={handleCategories}>
                 <option value = "All">All</option>
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

        </div>
    )
}

export default Category;