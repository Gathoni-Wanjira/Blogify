import React from "react";
import Blogcard from "./Blogcard";

function BlogCollection({blogposts, search, onLike}) {

  const handleonLike=(id, currentLIkes)=>{
    onLike(id, currentLIkes)
  }

////Maps through the blog data and if the function is called, it renders all of the blog data that was fetched.
  function allBlogs(){
    const allblogs = blogposts.map((ablog) => {
      return (
        <Blogcard
        onLike = {handleonLike}
          key={ablog.id}
          id={ablog.id}
          title={ablog.title}
          author={ablog.author}
          blog_image={ablog.avatar_url}
          date={ablog.date}
          category={ablog.category}
          blog_post={ablog.blog_post.substring(0,150)}
          comments={ablog.comments}
          likes={ablog.likes}
          mins={ablog.mins}
        />
      );
    })

    return allblogs
  }

////filters the blog data based on title search
  const searchData = blogposts.filter((item) => {
    if (item.title.toLowerCase().includes(search.toLowerCase())){
             return item
        
       

        

    }
})





  return (
    <div>
      {/* Creating a conditional where blog data is rendered based on whther the search state is empty or not */}
      {search === '' ? allBlogs(): searchData.map((ablog) => {
      return (
        <Blogcard
        onLike = {handleonLike}
          key={ablog.id}
          title={ablog.title}
          author={ablog.author}
          blog_image={ablog.avatar_url}
          date={ablog.date}
          category={ablog.category}
          blog_post={ablog.blog_post.substring(0,150)}
          comments={ablog.comments}
          likes={ablog.likes}
          mins={ablog.mins}
        />
      );
    })}
    </div>
  );
}

export default BlogCollection;
