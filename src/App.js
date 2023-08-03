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
/////the data that is going to be used to render the BlogCollection
  const [filtered, setFiltered] = useState(blogposts)
/////used to determine whether category state has been changed.
  const [categ, setCateg] = useState('All')
  const [pressed, setPressed] = useState(false)
  const [topPressed, setTopPressed] = useState(false)

  useEffect(() => {
    if(categ === 'All' && pressed === false && topPressed === false){
      setFiltered(blogposts)
    }
  })


useEffect(() => {
  if(categ === 'All'){
    setFiltered(blogposts)
    console.log(filtered)
}

}
  
)
  

/////filters the blog data based on their category
  function handleCategories(e){
        
    let target = e.target.value
    setCateg(target);
    if(target !== 'All' && pressed === false && topPressed === false){
        
        setFiltered( blogposts.filter((item) => item.category === target))
        
        
       
        return  console.log(filtered)
    }else{
        
        setFiltered(blogposts)
        return //console.log(filtered)
    }

}

////function the renders the blogcolection based on the blogs' date 
///when the 'NEW' Sort button is pressed

function handleNew(){
  const arr = [...filtered]
  setPressed(!pressed)
  arr.sort(function(a, b) {
    var c = new Date(a.date);
    var d = new Date(b.date);
    return c-d;
});


const arr2 = arr.reverse()
console.log(arr2)

setFiltered(arr2)
}

////handles sorting blog collection based on the number of likes a blog has
function handleTop(){
  const arr = [...filtered]
  setTopPressed(!topPressed)
  arr.sort((a, b) => parseFloat(b.likes) - parseFloat(a.likes));
  console.log(arr)
  setFiltered(arr)
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

     <Sort handleCategories={handleCategories} handleNew={handleNew} handleTop={handleTop}/>
    <BlogCollection blogposts={filtered} search={search}  onLike={handleLike}/>

    <Modal onAdd={handleAdd} />
    <Newsletter />
    <Footer />





  </div>
);
}

export default App;
