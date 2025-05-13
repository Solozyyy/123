import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/api/blogs/${slug}`)
            .then((res) => res.json())
            .then((data) => setPost(data))
            .catch(() => setPost(null));
    }, [slug]);

    if (!post) return <p>❌ Post not found.</p>;

    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
        </div>
    );
};

export default Post;
