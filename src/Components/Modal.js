import React from 'react'

function Modal() {
  return (

<div className="addBlogSection" id="showAddBlog">
    <form>
        <p>New Blog Post</p>
    <input type="text" name="title" id="title" placeholder="title"/><br/>
            <input type="text" name="author" id="author" placeholder="author"/><br/>
            <input type="url" name="url" id="url" placeholder="img-url"/><br/>
            <input type="text" name="category" id="cat" placeholder="category"/><br/>
            <input type="date" name="date-posted" id="date-posted"/><br/>
             <input type="text" name="likes" id="likes" placeholder="likes"/><br/> 
            <input type="text" name="comments" id="comments" placeholder="comments"/><br/> 
            <input type="text" name="mins" id="mins-toread" placeholder="mins to read"/><br/>
            <textarea name="blog" id="post" cols="30" rows="10" placeholder="blog post"></textarea><br/>
            <input type="submit" value="Submit Blog Post"/>
    </form>

</div>   
  )
}

export default Modal
