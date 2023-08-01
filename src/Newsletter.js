import React from "react";


function Newsletter(){











    return(
        <div className="newsletter">
            <h2>Blogify</h2>
            <h1>Subscribe to our Blogs</h1>
            <p>Pick the blog emails you want to recieve:</p>

            <form>
                 <div className="category-checkbox">
                     <div class="form-check">
                   <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" ></input>
                   <label className="form-check-label" for="disabledFieldsetCheck">
                      Writing
                   </label>
                   </div>
                   <div class="form-check">
                   <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" ></input>
                   <label className="form-check-label" for="disabledFieldsetCheck">
                      Self-Help
                   </label>
                   </div>
                   <div class="form-check">
                   <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" ></input>
                   <label className="form-check-label" for="disabledFieldsetCheck">
                      Technology
                   </label>
                   </div>
                   <div class="form-check">
                   <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" ></input>
                   <label className="form-check-label" for="disabledFieldsetCheck">
                      Programming
                   </label>
                   </div>
                   <div class="form-check">
                   <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" ></input>
                   <label className="form-check-label" for="disabledFieldsetCheck">
                      Environment
                   </label>
                   </div>
            </div>

            <div className="mb-3" id="email">
                 <label for="exampleInputEmail1" className="form-label">Email address</label>
                 <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                 
           </div>

           <button type="submit" class="btn btn-outline-info">Submit</button>
            </form>
            




        </div>
    )
}

export default Newsletter