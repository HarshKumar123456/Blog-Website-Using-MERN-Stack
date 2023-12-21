import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic'],
    ['link', 'blockquote', 'code-block', 'image'],
    [{ list: 'ordered' }, { list: 'bullet' }],
  ],
};

const EditBlog = ({ blog }) => {
  const [blogTitle, setBlogTitle] = useState(blog.title);
  const [blogContent, setBlogContent] = useState(blog.content);

  const serverUrl = import.meta.env.VITE_SERVER_URL;

  const handleSave = async (event) => {
    // event.preventDefault();
    try {
      const response = await fetch(`${serverUrl}/updateBlog`, {
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
      <h1>Edit Blog</h1>
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
        <ReactQuill
          value={blogContent}
          modules={modules}
          onChange={setBlogContent}
          theme="snow"
        />
        <div className="button-container mt-4">
          <button type="submit" className="btn btn-outline-success">
            Save
          </button>
          <a href={`/${(blog.type).toLowerCase()}`} className="cancel-blog-creation btn btn-outline-danger">
            Cancel
          </a>
        </div>
      </form>
    </>
  );
};

export default EditBlog;
