import React from "react";

function Newsletter() {
  function handleSubmit(e) {
    e.preventdefault();
  }

  return (
    <div className="newsletter">
      <h1>Subscribe to our Blogs</h1>
      <p>Select the blog emails you want to recieve:</p>

      <form>
        <div className="category-checkbox">
          <div class="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="disabledFieldsetCheck"
            ></input>
            <label className="form-check-label" for="disabledFieldsetCheck">
              Writing
            </label>
          </div>
          <div class="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="disabledFieldsetCheck"
            ></input>
            <label className="form-check-label" for="disabledFieldsetCheck">
              Self-Help
            </label>
          </div>
          <div class="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="disabledFieldsetCheck"
            ></input>
            <label className="form-check-label" for="disabledFieldsetCheck">
              Technology
            </label>
          </div>
          <div class="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="disabledFieldsetCheck"
            ></input>
            <label className="form-check-label" for="disabledFieldsetCheck">
              Programming
            </label>
          </div>
          <div class="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="disabledFieldsetCheck"
            ></input>
            <label className="form-check-label" for="disabledFieldsetCheck">
              Environment
            </label>
          </div>
        </div>

        <div className="email-section" id="email">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="inputstyle"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
          <button
            type="submit"
            class="btn btn-outline-info"
            onClick={(e) => handleSubmit(e)}
          >
            Subscribe
          </button>
        </div>
        <p className="policy">
          We're committed to your privacy. Blogify uses the information you
          provide to us to contact you about our relevant content, products, and
          services. You may unsubscribe from these communications at any time.
          For more information, check out our <a href="https://www.freeprivacypolicy.com/blog/privacy-policy-url/">privacy policy </a>
        </p>
      </form>
    </div>
  );
}

export default Newsletter;
