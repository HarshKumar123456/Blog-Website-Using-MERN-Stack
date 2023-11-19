
# Blog Website Using MERN Stack with Quill Text Editor

This project is a robust and dynamic Blog Website built using the MERN (MongoDB, Express.js, React, Node.js) stack, now enhanced with the powerful Quill text editor for an enriched writing experience.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```

MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/<database>?retryWrites=true&w=majority

```

Replace the placeholders `<username>`, `<password>`, and `<database>` with your MongoDB Atlas cluster credentials:

+ `<username>`: Your MongoDB Atlas database username.
+ `<password>`: Your MongoDB Atlas database password.
+ `<database>`: The name of your MongoDB database.

#### Obtaining MongoDB Atlas Cluster Details

1. `Sign in or Sign up to MongoDB Atlas`: MongoDB Atlas
2. `Create a Cluster`: Follow the instructions on MongoDB Atlas to create a new cluster.
3. `Get Cluster Connection Details`: In your MongoDB Atlas dashboard, navigate to your cluster and click on "Connect." Follow the instructions to obtain your cluster URL, username, password, and database name.
4. `Set Up .env File`: Use the acquired credentials to fill in the placeholders in the .env file in your project.

#### Note:
Keep your credentials secure. Avoid sharing them publicly or committing them to version control systems.


## Run Locally

#### Server Setup

```

# Clone the project
git clone https://github.com/HarshKumar123456/Blog-Website-Using-MERN-Stack.git

# Navigate to the project directory
cd "Blog Website - Text Editor/"

# Go to the server folder
cd server

# Install dependencies
npm install

# Setup Environment Variables in `.env` file in `server` folder and then start the server
npm run start

```

#### Client Setup
```
# Go to the project directory
cd "Blog Website - Text Editor/"

# Go to the client folder
cd client

# Install dependencies
npm install

# Run the Vite+React App
npm run dev


```

#### Open http://localhost:5173/ in Browser and You're all set

