import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Blogcard({ title,mins, author,blog_image, date,category,blog_post,comments,likes, id, onLike, onReadMoreClick }) {

const[currentLIkes, setCurrentLIkes] =useState(likes)
const [isLiked, setIsLiked] = useState(false);

  const handleLikesClick=(id)=>{

    if(!isLiked){

      const updatedLIkes =parseInt (currentLIkes) + 1
      setCurrentLIkes(updatedLIkes );
      setIsLiked(true)
      onLike(id, updatedLIkes)

    }else{

      const updatedLikes =currentLIkes - 1; 
      setCurrentLIkes(updatedLikes);
      setIsLiked(false)
      onLike(id, updatedLikes)

    }
    

  }
  return (
    <>
      <div className="card mb-3 w-75 p- mx-auto p-2">
        <div className="row g-0">
          <div className="col-md-4">
            <img id="thumbnail"
              src={blog_image}
              className="img-fluid rounded-start"
              alt="blogimage"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text p-1 mb-2 ">
                <small className="text-body-secondary author">{author}</small>
              </p>
              <p className="card-text">
                {blog_post}  <Link to={`/blog/${id}`} onClick={onReadMoreClick}>Read More...</Link> 
              </p>
              <div className="row">
                <p className="col-2">
                  <small className="text-body-secondary">{category}</small>
                </p>
                <p className="col-2">
                  <small className="text-body-secondary"> {mins}</small>
                </p>
                <p className="col-2">
                  <small className="text-body-secondary">{date}</small>
                </p>
                <div />
                <div className="row">
                  <p className="col-2">
                    <small className="text-body-secondary">
                      <i className="fa-solid fa-heart" onClick={() => handleLikesClick(id)}></i>   {likes}
                    </small>
                  </p>
                  <p className="col-2">
                    <small className="text-body-secondary" >
                      <i className="fa-solid fa-comment"  ></i>   {comments}
                    </small>
                  </p>
                  <p className="col-2">
                    <small className="text-body-secondary">
                      <i className="fa-solid fa-share-nodes"></i>
                    </small>
                  </p>
                  <p className="col-2">
                    <small className="text-body-secondary">
                      <i className="fa-solid fa-bookmark"></i>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogcard;
