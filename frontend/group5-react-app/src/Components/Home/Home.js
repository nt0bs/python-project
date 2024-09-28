import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import "./Components/Home.css";
import "./Components/AddJob.js";
const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to our Job Listing Platform</h1>
      <nav>
        
            <h3>Select option below</h3>
        <ul className="nav-list">
          <li>
          <Router>
            <Link
              to="./Component/Add Job"
              aria-label="Add New Job"
            >
              Add New Job
            </Link>
            
            </Router>
          </li>
          <li>
            <Link
              to="/jobs"
              aria-label="View Job Listings"
            >
              View Job Listings
            </Link>
          </li>
          <Routes>
            <Route path="./Component/Add Job" element = {<AddJob />} />
            </Routes>
        </ul>
        
      </nav>
    </div>
  );
};
export default Home;
