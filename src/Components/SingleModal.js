import React from "react";

function SingleModal({ selectedBlog, closeModal }) {
  if (!selectedBlog) {
    return null;
  }

  return (
    <div className="modal fade show d-block" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xl" style={{ width: "90%", maxHeight: "95%" }} role="document">
        <div className="modal-content shadow" style={{ backgroundColor: "#14213d", margin: "20px", padding: "10px" }}>
          <div className="modal-header" style={{ backgroundColor: "#14213d", color: "#fff" }}>
            <h5 className="modal-title" id="exampleModalLabel">
              {selectedBlog.title}
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal} style={{ background: "#ff5c35", border: "none" }}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body" style={{ backgroundColor: "#fff", color: "#000", maxHeight: "80vh", overflowY: "auto", textAlign: "center" }}>
            <img src={selectedBlog.avatar_url} alt={selectedBlog.title} className="img-fluid rounded" style={{ maxWidth: "70%", maxHeight: "30vh", marginBottom: "10px" }} />
            <p style={{ whiteSpace: "pre-wrap", textAlign: "justify", textJustify: "inter-word", wordBreak: "break-word" }}>{selectedBlog.blog_post}</p>
          </div>
          <div className="modal-footer" style={{ color: "#ff5c35" }}>
            <p className="mr-auto">
              Category: <span className="text-primary">{selectedBlog.category}</span>
            </p>
            <p>
              <i className="fa-solid fa-heart text-danger"></i> Likes: <span className="text-success">{selectedBlog.likes}</span>
            </p>
            <p>
              <i className="fa-solid fa-clock"></i> Read Mins: {selectedBlog.mins}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleModal;
