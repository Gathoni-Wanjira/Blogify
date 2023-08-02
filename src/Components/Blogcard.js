import React from "react";

function Blogcard({ title,mins, author,blog_image, date,category,blog_post,comments,likes}) {
  return (
    <>
      <div className="card mb-3 w-75 p- mx-auto p-2">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={blog_image}
              className="img-fluid rounded-start"
              alt="blogimage"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text p-3 mb-2 author">
                <small className="text-body-secondary">{author}</small>
              </p>
              <p className="card-text">
                {blog_post}...
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
                      <i className="fa-solid fa-heart"></i>{likes}
                    </small>
                  </p>
                  <p className="col-2">
                    <small className="text-body-secondary">
                      <i className="fa-solid fa-comment"></i>{comments}
                    </small>
                  </p>
                  <p className="col-2">
                    <small className="text-body-secondary">
                      <i className="fa-solid fa-share"></i>
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
