import React from 'react';
import parse from "html-react-parser";

const blogStyle = {
    "margin-top": '100px',
    // "display": 'flex',
    "minHeight": '100px',
    "border": '1px solid black',
    "borderRadius": '20px',
    "padding": '40px',
    "boxShadow": '4px 4px 10px #d9d9d9',
    "background-color": "#ffffff",
};



const BlogItem = ({ blog, onDetail }) => {
    return (
        <div className="blog-item m-2 p-2" style={blogStyle}>
            <h2 style={{fontSize: "3.5rem"}}>{blog.title}....</h2>
            <p>{parse(blog.content)}</p>
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
