import { useState, useEffect } from "react";
const ALLJOBS = [
  {
    id: 1,
    title: "frontend developer",
    salary: 202929,
    currency: "INR",
    skills: ["angular", "react", "html", "css"],
    roles: "-- -- roles -- --",
    company: [{ name: "abc", location: "bangalore", address: "address " }],
  },
];
export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const loadJobs = (data) => {
    setJobs();
  };
  useEffect(() => {
    return loadJobs(ALLJOBS);
  }, []);
  return (
    <div>
      <div>Jobs</div>
      <div>
        {jobs &&
          jobs.length > 0 &&
          jobs.map((item) => {
            return <div key={item.id}>{item}</div>;
          })}
      </div>
    </div>
  );
}
