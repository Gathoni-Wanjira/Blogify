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

    
//////state for our search value
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
    
    },[])

    

  return (
    <div className="App">

      
      
     <Navbar OnSearch={handleSearch}/>
     <Sort/>
     <BlogCollection blogposts={blogposts} search={search}/>
     <Modal/>
     <Newsletter />
     <Footer />
      


      
     
    </div>
  );
}

export default App;
