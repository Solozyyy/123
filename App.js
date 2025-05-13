import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import PostList from "./postLists";
import Post from "./post";


// Layout component để bao bọc menu và các nội dung trang
const Layout = () => (
  <div style={{ padding: 20 }}>
    <nav style={{ marginBottom: 20 }}>
      <Link to="/" style={{ marginRight: 10 }}>Home</Link>
      <Link to="/about" style={{ marginRight: 10 }}>About</Link>
      <Link to="/posts" style={{ marginRight: 10 }}>Posts</Link>
      <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
    </nav>
    <Outlet />
  </div>
);

// Home component
const Home = () => (
  <div>
    <h2>Home View</h2>
    <p>Welcome to the homepage.</p>
  </div>
);

const Login = () => {
  const [acc, setAcc] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { username: acc, password: pass });

    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={acc}
            onChange={(e) => setAcc(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );

};

// About component
const About = () => (
  <div>
    <h2>About View</h2>
    <p>This is a simple blog example using React Router v6.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout là wrapper chung cho các route con */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<PostList />} />
          <Route path="posts/:slug" element={<Post />} />
          <Route path="login" element={<Login />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;