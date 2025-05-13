const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

app.use(cors());

const blogs = [
    {
        id: "first-blog-post",
        title: "First Blog Post",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: "second-blog-post",
        title: "Second Blog Post",
        description: "Hello React Router v6!",
    },
    {
        id: "third-blog-post",
        title: "Third Blog Post",
        description: "suka blyad",
    },
    {
        id: "fourth-blog-post",
        title: "Fourth Blog Post",
        description: "muehehehehehehe",
    },
    {
        id: "fifth-blog-post",
        title: "Fifth Blog Post",
        description: "muehehehehehehe",
    },
];

// Get all blogs
app.get("/api/blogs", (req, res) => {
    res.json(blogs);
});

app.get("/api/blogs/numberOfPosts", (req, res) => {
    res.json({ count: blogs.length });
});

// Get blog details by id
app.get("/api/blogs/:id", (req, res) => {
    const blog = blogs.find((b) => b.id === req.params.id);
    if (blog) {
        res.json(blog);
    } else {
        res.status(404).json({ message: "Blog not found" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
