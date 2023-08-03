import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BlogCollection from './Components/BlogCollection'
import Navbar from './Components/Navbar';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';
import AddBlog from './Components/AddBlog';


function App() {


  const [blogposts, setblogposts] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3002/blogs")
      .then(response => response.json())
      .then(blogs => {
        console.log(blogs)
        setblogposts(blogs);
      })

  }, [])



  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<BlogCollection blogs={blogs} />} />
          <Route path="/add-blog" element={<AddBlog />} />
        </Routes>
      </Router>

      <BlogCollection blogposts={blogposts} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
