import React from "react";

function Modal() {
  return (
    <div className="addBlogSection" id="showAddBlog">
      <form>
        <p id = "blogHeading">New Blog Post</p>
        <div className="table">
            <div className="table-input">
            <input type="text" name="title" id="title" placeholder="title" />
         
         <input type="url" name="url" id="url" placeholder="img-url" />
        
         <input type="date" name="date-posted" id="date-posted" />
         
         <input
           type="text"
           name="mins"
           id="mins-toread"
           placeholder=" X mins to read"
         />

            </div>

         <div>
<div className="sub-nav">
<input type="text" name="category" id="cat" placeholder="category" />
          
          <input type="text" name="author" id="author" placeholder="author" />
         
</div>
         
          <textarea
            name="blog"
            id="post"
            cols="30"
            rows="10"
            placeholder="post your blog"
          ></textarea>
         <button  id="submitBlogbtn" type="submit" value="Submit Blog Post" >Submit Blog Post</button>

         </div>
            
        </div>
      </form>
    </div>
  );
}

export default Modal;
