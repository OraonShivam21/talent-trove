import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

/* eslint-disable react/prop-types */
const JobListings = ({ jobsPage = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = `https://talent-trove-api.onrender.com`;

  useEffect(() => {
    const apiUrlUpdated = jobsPage
      ? `${apiUrl}/jobs`
      : `${apiUrl}/jobs?_limit=3`;
    const fetchingData = async () => {
      try {
        const response = await fetch(apiUrlUpdated);
        const data = await response.json();
        // setJobs(() => jobsPage ? data : data.slice(0, 3)); // if it fetches all the jobs without using _limit query
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchingData();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {jobsPage ? "Browse Jobs" : "Recent Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
