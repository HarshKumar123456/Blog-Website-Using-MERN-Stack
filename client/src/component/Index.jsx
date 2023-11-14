import React, { useState, useEffect } from 'react';
import BlogItem from './BlogItem'; // Import your BlogItem component
import DetailedBlogView from './DetailedViewOfBlog';
import NewBlog from './NewBlog';

const Index = ({ route }) => {
  const [typeOfBlogs, setTypeOfBlogs] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData(route);
  }, [route]);

  const fetchData = async (route) => {
    let apiUrl;

    switch (route) {
      case '/school':
        apiUrl = 'http://localhost:8000/school';
        break;
      case '/college':
        apiUrl = 'http://localhost:8000/college';
        break;
      default:
        apiUrl = 'http://localhost:8000'; // Default endpoint for "/"
        break;
    }

    try {
      setIsLoading(true);
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result);
      setTypeOfBlogs(result.typeOfBlogs);
      setBlogs(result.blogs);
      setIsLoading(false);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setIsLoading(false);
    }
  };


  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleDetailedViewOfBlog = async (idOfBlog) => {
    const selectedBlog = blogs.find((blog) => blog._id === idOfBlog);
    setSelectedBlog(selectedBlog);
  };

  const handleEdit = () => {
    // Handle edit action
    console.log('Edit action clicked');
  };

  const handleDelete = () => {
    // Handle delete action
    console.log('Delete action clicked');
  };

  const createNewBlog = async (blogData) => {
    try {
      const response = await fetch('http://localhost:8000/addBlog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      if (!response.ok) {
        throw new Error('Failed to create new blog');
      }

      fetchData(route); // Fetch updated blog list after creating the new blog
    } catch (error) {
      console.error('Error creating new blog:', error);
    }
  };

  const [createButtonClicked,setCreateButtonClickedStatus] = useState(false);

  async function handleCreateButtonClick(){
    setCreateButtonClickedStatus(!createButtonClicked);
  }
  return (
    <>
      {selectedBlog && (
        <DetailedBlogView
          blog={selectedBlog}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
      
      <div className="heading container">
        <h1>Track your days....</h1>
        {createButtonClicked && <NewBlog typeOfBlog={typeOfBlogs} onCreateBlog={createNewBlog} />}
        <form action="/newBlog" method="post">
          
          <button type="submit" className="btn btn-outline-success" onClick={(event) => {
            console.log("Create a new blog ....");
            handleCreateButtonClick();
            event.preventDefault();
          }}> Create </button>
        </form>
      </div>

      <h2 className="blog-type">{typeOfBlogs}</h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {blogs.length !== 0 ? (
            <div className="container blog-container-flexbox">
              {blogs.map(blog => (
                <BlogItem key={blog._id} blog={blog} onDetail={handleDetailedViewOfBlog} />
              ))}
            </div>
          ) : (
            <p>No blogs available.</p>
          )}
        </>
      )}
    </>
  );
};

export default Index;
