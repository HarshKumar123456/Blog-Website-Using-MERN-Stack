import React from 'react';

const DetailedBlogView = ({ blog, handleEdit, handleDelete }) => {
  return (
    <>
      <div className="options-to-do-with-blog">
        <h2 className="blog-type">{blog.type}</h2>
        <form action="/actions" method="post">
          <input type="hidden" name="blogType" value={blog.type} />
          <input type="hidden" name="blogId" value={blog._id} />
          <input type="hidden" name="blogTitle" value={blog.title} />
          <input type="hidden" name="blogContent" value={blog.content} />
          <div className="option-buttons">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={(event) => {
                handleEdit(blog);
                event.preventDefault();
              }}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={(event) => {
                handleDelete(blog);
                event.preventDefault();
              }}
            >
              Delete
            </button>
          </div>
        </form>
      </div>

      <div className="container blog-container-flexbox">
        <div className="container blog-container-flexbox-items" id={blog._id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      </div>
    </>
  );
};

export default DetailedBlogView;
