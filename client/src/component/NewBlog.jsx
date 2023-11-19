import React, { useState } from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic"],
    ["link", "blockquote", "code-block", "image"],
    [{ list: "ordered" }, { list: "bullet" }],
    
  ]
};


const NewBlog = ({ typeOfBlog, onCreateBlog }) => {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');

  const handleCreateBlog = (event) => {
    // event.preventDefault();
    if (!blogTitle || !blogContent) {
      alert('Please enter a title and content for the blog');
      return;
    }

    const blogData = {
      blogType: typeOfBlog,
      blogTitle,
      blogContent,
    };

    onCreateBlog(blogData); // Trigger the creation of a new blog
    setBlogTitle('');
    setBlogContent('');
  };

  return (
    <form onSubmit={handleCreateBlog} className="form-container">
      <input type="text" value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)} placeholder="Enter title here" />
      <ReactQuill modules={modules} onChange={setBlogContent} placeholder="Save your memories...." theme="snow" />
      <div className="button-container mt-4">
        <button type="submit" className="btn btn-outline-success">Save</button>
        <button className="cancel-blog-creation btn btn-outline-danger">Cancel</button>
      </div>
    </form>
  );
};

export default NewBlog;
