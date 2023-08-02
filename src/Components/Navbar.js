 function Navbar(){
   
return( 
    <>
    <div className="col-2 d-flex mx-auto p-2 p-3 mb-2 bg-success-subtle text-emphasis-success" >
    <i className="fa-solid fa-blog  row"></i>
     <p className="row">Blogs</p>,
    <p className="row">Newsletters</p>, 
    <p className="row">Resources</p> 

    </div>
    <div className="col-2 d-flex" >
    <button type="button" className="row">Add Blog</button>
    </div>
    

    </>
   
) 
    

 }

 export default Navbar;