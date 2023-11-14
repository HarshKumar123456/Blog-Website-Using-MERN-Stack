import React, { useState } from 'react';

const NewBlog = ({ typeOfBlog, onCreateBlog }) => {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');

  const handleCreateBlog = (event) => {
    event.preventDefault();
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
      <textarea value={blogContent} onChange={(e) => setBlogContent(e.target.value)} placeholder="Save your memories...." />
      <div className="button-container">
        <button type="submit" className="btn btn-outline-success">Save</button>
        <button className="cancel-blog-creation btn btn-outline-danger">Cancel</button>
      </div>
    </form>
  );
};

export default NewBlog;
