import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [text, setText] = useState("");
    const [postCount, setPostCount] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/api/blogs")
            .then((res) => res.json())
            .then((data) => setPosts(data));

        fetch("http://localhost:8080/api/blogs/numberOfPosts")
            .then((res) => res.json())
            .then((data) => setPostCount(data.count));
    }, []);

    const handleText = (e) => {
        setText(e.target.value);
    };

    return (
        <>
            <h2>Blog</h2>
            <p>Number of post: {postCount}</p>
            <input
                type="text"
                value={text}
                onChange={handleText}
                placeholder="Type here..." />
            <h3>Text: {text}</h3>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            <h3>{post.title}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default PostList;
