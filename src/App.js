import { useEffect, useState } from 'react';
import './App.css';
import BlogCollection from './Components/BlogCollection'


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
     <h2>Nav Bar Area</h2>
     <BlogCollection blogposts={blogposts} />
    </div>
  );
}

export default App;
