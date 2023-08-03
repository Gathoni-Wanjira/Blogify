import React from "react";
import Blogcard from "./Blogcard";
import { Link, Routes, Route } from "react-router-dom";
import SingleBlog from "./SingleBlog";


function BlogCollection({ blogposts, search, onLike , handleReadMore}) {

    // Function to handle "Read More" click and show the modal
    const handleReadMoreClick = (id) => {
      handleReadMore(id); // Call the callback function from App component
    };
  

  const handleonLike = (id, currentLIkes) => {
    onLike(id, currentLIkes)
  }

  ////Maps through the blog data and if the function is called, it renders all of the blog data that was fetched.
  function allBlogs() {
    const allblogs = blogposts.map((ablog) => {
      return (
        <>
          <Blogcard
           onReadMoreClick={() => handleReadMoreClick(ablog.id)}
            onLike={handleonLike}
            key={ablog.id}
            id={ablog.id}
            title={ablog.title}
            author={ablog.author}
            blog_image={ablog.avatar_url}
            date={ablog.date}
            category={ablog.category}
            blog_post={ablog.blog_post.substring(0, 150)}
            comments={ablog.comments}
            likes={ablog.likes}
            mins={ablog.mins}
          />

        </>

      );
    })

    return allblogs
  }

  ////filters the blog data based on title search
  const searchData = blogposts.filter((item) => {
    if (item.title.toLowerCase().includes(search.toLowerCase())) {
      return item





    }
  })





  return (
    <div>
      <Routes> {/* Use Routes here */}
        <Route path="/blog/:id" element={<SingleBlog blogs={blogposts} />} /> {/* Move Route here */}
      </Routes>
      {/* Creating a conditional where blog data is rendered based on whther the search state is empty or not */}
      {search === '' ? allBlogs() : searchData.map((ablog) => {
        return (
          <Blogcard
            onLike={handleonLike}
            key={ablog.id}
            title={ablog.title}
            author={ablog.author}
            blog_image={ablog.avatar_url}
            date={ablog.date}
            category={ablog.category}
            blog_post={ablog.blog_post.substring(0, 150)}
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
