import React from "react";
import Blogcard from "./Blogcard";

function BlogCollection({ blogposts }) {
  return (
    <div>
      {blogposts.map((ablog) => {
        return (
          <Blogcard
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
