import { useState } from "react";
import React from "react";

function Modal({ onAdd }) {
    const [formData, setformData] = useState({
        title: "",
        author: "",
        date: "",
        avatar_url: "",
        category: "",
        blog_post: "",
        mins: ""
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformData((prevData) => ({
            ...prevData,
            [name]: value
        }))

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //check if state is empty
        if (
            formData.title.trim() === "" ||
            formData.author.trim() === "" ||
            formData.date.trim() === "" ||
            formData.blog_post.trim() === ""
        ) {
            alert("Please fill in all the form fields");
            return;
        }

        
        fetch("http://localhost:3002/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((response) => {

                if (response.ok) {
                    alert("Blog Added Successfully")
                    onAdd(formData)

                } else {
                    alert("Failed to create the blog post.");
                }
            })
            .catch((error) => {
                alert.error("Error:", error);
            });

        // Clear the form fields after submission
        const form = e.target
        form.reset()

        setformData({
            title: "",
            imageUrl: "",
            datePosted: "",
            minutesToRead: "",
            category: "",
            author: "",
            blogContent: ""
        });
    };

    console.log(formData)
    return (
        <div className="addBlogSection" id="showAddBlog">
            <form onSubmit={handleSubmit}>
                <p className="blogpostheading">New Blog Post</p>
                <div className="table">
                    <div className="table-input">
                        <input type="text" name="title" id="title" placeholder="title" onChange={handleInputChange} />

                        <input type="url" name="avatar_url" id="url" placeholder="img-url" onChange={handleInputChange} />

                        <input type="date" name="date" id="date-posted" onChange={handleInputChange} />

                        <input
                            type="text"
                            name="mins"
                            id="mins-toread"
                            placeholder=" X mins to read"
                            onChange={handleInputChange}
                        />

                    </div>

                    <div>
                        <div className="sub-nav">
                            <input type="text" name="category" id="cat" placeholder="category" onChange={handleInputChange} />

                            <input type="text" name="author" id="author" placeholder="author" onChange={handleInputChange} />

                        </div>

                        <textarea
                            name="blog_post"
                            id="post"
                            cols="30"
                            rows="10"
                            placeholder="blog post"
                            onChange={handleInputChange}
                        ></textarea>
                        <button id="submitBlogbtn" type="submit" value="Submit Blog Post" >Submit Blog Post</button>

                    </div>

                </div>
            </form>
        </div>
    );
}

export default Modal;

