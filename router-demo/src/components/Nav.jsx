import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <h2>Router Demo</h2>
      {/* <a href="/">Home</a>
      <a href="/books">Book List</a>
      <a href="/contact-us">Contact Us</a>
      <a href="/xyz">XYZ</a> */}
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/books">Book List</Link>
      <Link to="/contact-us">Contact Us</Link>
      <Link to="/xyz">XYZ</Link>
      <hr />
    </div>
  );
};
