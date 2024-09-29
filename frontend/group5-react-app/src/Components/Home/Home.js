import React from "react";
import { Link } from 'react-router-dom';
import "./Component/Home/Home.css";
import "./Component/Add Job/AddJob.js";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to our Job Listing Platform</h1>
      <nav>
        
            <h3>Select option below</h3>
        <ul className="nav-list">
          <li>
    
            <Link
              to="./Component/Add Job/AddJob"
              aria-label="Add New Job"
            >
              Add New Job
            </Link>
            
          </li>
          <li>
            <Link
              to="/jobs"
              aria-label="View Job Listings"
            >
              View Job Listings
            </Link>
          </li>
          
        </ul>
        
      </nav>
    </div>
  );
};
export default Home;