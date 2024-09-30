import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get("http://localhost:500/api/jobs");
      setJobs(response.data);
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            {job.title}
            <Link to={"/job/R{job.id}"}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
