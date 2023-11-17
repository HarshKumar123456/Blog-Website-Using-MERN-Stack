import React, { useState } from 'react';

const EditBlog = ({ blog }) => {
  const [blogTitle, setBlogTitle] = useState(blog.title);
  const [blogContent, setBlogContent] = useState(blog.content);

  const handleSave = async (event) => {
    // event.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/updateBlog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          blogType: blog.type,
          blogId: blog._id,
          blogTitle: blogTitle,
          blogContent: blogContent,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update blog');
      }

      // Handle successful update, e.g., redirect to the updated blog page
      // Example: history.push(`/${blog.type}/${blog._id}`);
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <>
      <h1>Track your days....</h1>
      <form onSubmit={handleSave} className="form-container">
        <input type="hidden" name="blogType" value={blog.type} />
        <input type="hidden" name="blogId" value={blog._id} />
        <input
          type="text"
          id="blogTitle"
          name="blogTitle"
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
        />
        <textarea
          name="blogContent"
          id="blogContent"
          cols="30"
          rows="10"
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
        />
        <div className="button-container">
          <button type="submit" className="btn btn-outline-success">
            Save
          </button>
          <a href={`/${blog.type}`} className="cancel-blog-creation btn btn-outline-danger">
            Cancel
          </a>
        </div>
      </form>
    </>
  );
};

export default EditBlog;