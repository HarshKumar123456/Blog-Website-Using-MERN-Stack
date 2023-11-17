import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 8000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use((req, res, next) => {
    const date = new Date().toISOString();
    console.log(`Route accessed at ${date}: ${req.method} ${req.url}`);
    next();
  });
  
// cors
app.use(cors({ origin: true}));

async function connectToDatabase() {
  await mongoose.connect(`${process.env.MONGODB_URI}`);
  console.log("MongoDB is connected....");
}

await connectToDatabase();

const schoolBlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const collegeBlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const schoolBlogModel = mongoose.model("SchoolBlog", schoolBlogSchema);
const collegeBlogModel = mongoose.model("CollegeBlog", collegeBlogSchema);

async function createNewSchoolBlog(blogTitle, blogContent) {
  const blog = new schoolBlogModel({
    title: blogTitle,
    content: blogContent,
  });
  await blog.save();
}

async function createNewCollegeBlog(blogTitle, blogContent) {
  const blog = new collegeBlogModel({
    title: blogTitle,
    content: blogContent,
  });
  await blog.save();
}

async function findSchoolBlogs() {
  const blogs = await schoolBlogModel.find();
  return blogs;
}

async function findCollegeBlogs() {
  const blogs = await collegeBlogModel.find();
  return blogs;
}

app.get("/", async (req, res) => {
  const type = "College";
  const blogs = await findCollegeBlogs();
  res.json({ typeOfBlogs: type, blogs: blogs });
});

app.get("/School", async (req, res) => {
  const type = "School";
  const blogs = await findSchoolBlogs();
  console.log(blogs);
  res.json({ typeOfBlogs: type, blogs: blogs });
});

app.get("/College", async (req, res) => {
  const type = "College";
  const blogs = await findCollegeBlogs();
  console.log(blogs);
  res.json({ typeOfBlogs: type, blogs: blogs });
});



app.post('/addBlog', async (req, res) => {
    console.log(req.body);
    const blogType = req.body.blogType;
    const blogTitle = req.body.blogTitle;
    const blogContent = req.body.blogContent;
  
    if (blogType === 'College') {
      await createNewCollegeBlog(blogTitle, blogContent);
      const blogs = await findCollegeBlogs();
      res.json({ typeOfBlogs: blogType, blogs: blogs });
    } else {
      await createNewSchoolBlog(blogTitle, blogContent);
      const blogs = await findSchoolBlogs();
      res.json({ typeOfBlogs: blogType, blogs: blogs });
    }
  });
  
  app.post('/detailedBlog', async (req, res) => {
    console.log(req.body);
  
    const blogType = req.body.blogType;
    const blogId = req.body.blogId;
  
    var blogObject = {};
  
    if (blogType === 'College') {
      blogObject = await collegeBlogModel.findOne({ _id: blogId });
    } else {
      blogObject = await schoolBlogModel.findOne({ _id: blogId });
    }
  
    console.log('Printing object\n');
    console.log(blogObject);
  
    blogObject._id = blogId;
    blogObject.type = blogType;
  
    res.json({ blog: blogObject });
  });
  
  app.post('/actions', async (req, res) => {
    const action = req.body.action;
  
    if (action === 'delete') {
      if (req.body.blogType === 'College') {
        await collegeBlogModel.findByIdAndDelete({ _id: req.body.blogId });
      } else {
        await schoolBlogModel.findByIdAndDelete({ _id: req.body.blogId });
      }
  
      res.json({ message: 'Blog deleted successfully' });
    } else {
      console.log(action);
      res.sendStatus(404);
    }
    
  });
  
  app.post('/updateBlog', async (req, res) => {
    const blogId = req.body.blogId;
    const blogType = req.body.blogType;
    const blogTitle = req.body.blogTitle;
    const blogContent = req.body.blogContent;
  
    var blogObject = {
      title: blogTitle,
      content: blogContent,
    };
  
    if (blogType === 'College') {
      await collegeBlogModel.findByIdAndUpdate({ _id: blogId }, { $set: blogObject });
      blogObject = await collegeBlogModel.findById({ _id: blogId });
    } else {
      await schoolBlogModel.findByIdAndUpdate({ _id: blogId }, { $set: blogObject });
      blogObject = await schoolBlogModel.findById({ _id: blogId });
    }
  
    blogObject.type = blogType;
  
    console.log('after updation ');
    console.log(blogObject);
    res.json({ blog: blogObject });
  });


app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
