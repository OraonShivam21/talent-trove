import JobListings from "../components/JobListings";

const JobsPage = () => {
  return (
    <section className="bg-indigo-50 px-4 py-10">
      <JobListings jobsPage="true" />
    </section>
  );
};

export default JobsPage;
