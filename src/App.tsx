import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Registration from "./components/registration";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Login from "./components/login";
import Articles from "./components/article";
import Article from "./components/latest-articles/article";
import ContactUs from "./components/contact-us";
import Edit from "./components/edit-article/edit-article";
import TechArticle from "./components/tech-update/tech-article";
import NewPost from "./components/new-post/new-post";

import { Comments } from "./components/comments/comments";
function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== `/` && location.pathname !== `/login` ? (
        <Navbar />
      ) : null}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/tech-article/:id" element={<TechArticle />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/comments/:id" element={<Comments />} />
      </Routes>
    </>
  );
}
export default App;
