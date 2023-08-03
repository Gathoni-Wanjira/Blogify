import { useEffect, useState, useLayoutEffect } from 'react';

import './App.css';
import BlogCollection from './Components/BlogCollection'
import Navbar from './Components/Navbar';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';
import Modal from './Components/Modal';
import Sort from './Components/Sort';


function App() {


  const [blogposts, setblogposts] = useState([]);
  const [search, setSearch] = useState('')


  ////setting the value of the search value as the new state.
  const handleSearch = (value) => {
    setSearch(value)
    console.log(value)
  }









  useEffect(() => {
    fetch("http://localhost:3002/blogs")
      .then(response => response.json())
      .then(blogs => {
        console.log(blogs)
        setblogposts(blogs)



      })

  }, [])

  const handleAdd = (formData) => {
    setblogposts((prevData) => [
      ...prevData,
      formData
    ]
    )

}

  const handleLike = (id, currentLIkes)=>{
    
      console.log
      ("You loked A blog with id: ", id, currentLIkes)

      fetch(`http://localhost:3002/blogs/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ likes: currentLIkes })
      })

      .then(res=>{

        if(res.ok){
          const updatedBlogPosts =blogposts.map((blog)=>{
            if(blog.id === id){
              return{...blog, likes: currentLIkes}
            }
            return blog
          });

          setblogposts(updatedBlogPosts)
        }else{
          alert("you can't like")
        }
      })
      .catch((error) => {
        alert.error("Error:", error);
    });

}



return (
  <div className="App">



    <Navbar OnSearch={handleSearch} />
    <Sort />
    <BlogCollection blogposts={blogposts} search={search}  onLike={handleLike}/>
    <Modal onAdd={handleAdd} />
    <Newsletter />
    <Footer />





  </div>
);
}

export default App;
