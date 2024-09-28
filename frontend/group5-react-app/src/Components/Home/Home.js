import React from "react";
import { Link } from "react-router-dom";
import "./Components/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to our Job Listing Platform</h1>
      <nav>
        <ul className="nav-list">
          <li>
            <Link
              to="/add-job"
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
