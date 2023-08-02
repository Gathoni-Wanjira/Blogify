import { useEffect, useState } from 'react';
import './App.css';
import BlogCollection from './Components/BlogCollection'
import Navbar from './Components/Navbar';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';
import Modal from './Components/Modal';
import Sort from './Components/Sort';


function App() {

 
    const [blogposts, setblogposts] = useState([]);

    
    useEffect(() => {
        fetch("http://localhost:3002/blogs")
        .then(response => response.json())
        .then(blogs => {
            console.log(blogs)
            setblogposts(blogs);
        })
    
    },[])



  return (
    <div className="App">
     <Navbar />
     <Sort/>
     <BlogCollection blogposts={blogposts} />
     <Newsletter />
     <Footer />
     <Modal/>
    </div>
  );
}

export default App;
