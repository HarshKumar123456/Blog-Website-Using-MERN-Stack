import React from 'react';

const BlogItem = ({ blog ,onDetail}) => {
    return (
        <div className="blog-item">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <div className='container'>
                <form>
                    <input type="hidden" name="blogId" value={blog._id} />
                    <button type="submit" class="btn btn-outline-success" onClick={(event) => {
                        console.log("This detail is good");
                        onDetail(blog._id);
                        event.preventDefault();
                    }}> Details </button>
                </form>
            </div>
        </div>
    );
};

export default BlogItem;
