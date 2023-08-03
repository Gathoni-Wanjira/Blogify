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
  const [search, setSearch] = useState('')
/////the data that is going to be used to render the BlogCollection
  const [filtered, setFiltered] = useState([])
/////used to determine whether category state has been changed.
  const [categ, setCateg] = useState('All')

/////filters the blog data based on their category
  function handleCategories(e){
        
    let target = e.target.value
    setCateg(target);
    if(target != 'All'){
        
        setFiltered( blogposts.filter((item) => item.category === target))
        
        
       
        return  console.log(filtered)
    }else{
        
        setFiltered(blogposts)
        return //console.log(filtered)
    }

}


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



return (
  <div className="App">



    <Navbar OnSearch={handleSearch} />
    <Sort handleCategories={handleCategories}/>
    <BlogCollection blogposts={filtered} search={search} />
    <Modal onAdd={handleAdd} />
    <Newsletter />
    <Footer />





  </div>
);
}

export default App;
