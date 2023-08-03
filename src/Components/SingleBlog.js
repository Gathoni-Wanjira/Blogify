import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import SingleModal from "./SingleModal";

function SingleBlog({ blogs }) {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(true);

  // Find the selected blog based on the id
  const selectedBlog = blogs.find((blog) => blog.id === parseInt(id));

  if (!selectedBlog) {
    return <div>Blog not found</div>;
  }

  const closeModal = () => {
    // Function to close the modal and navigate back
    setShowModal(false);
    window.history.back();
  };

  return (
    <div>
      {showModal && <SingleModal selectedBlog={selectedBlog} closeModal={closeModal} />}
      <div>
        <Link to="/" className="btn btn-primary">
          Go Back to Blog Collection
        </Link>
      </div>
    </div>
  );
}

export default SingleBlog;
