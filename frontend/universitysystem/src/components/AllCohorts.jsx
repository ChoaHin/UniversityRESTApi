import { useEffect, useState } from "react";

function AllCohorts() {
  // Define a state variable called `cohorts` and initialize it to an empty array
  const [cohorts, setCohorts] = useState([]);

  // Fetch the list of cohorts from the API when the component mounts
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cohort/")
      .then((response) => response.json())
      .then((data) => setCohorts(data));
  }, []);

  // Define a function that takes a `cohort` object and returns a JSX element
  function renderCohort(cohort) {
    return (
      <div className="my-4 p-4 bg-gray-200 rounded-lg" key={cohort.id}>
        <h2 className="text-2xl font-bold">{cohort.name}</h2>
        <p className="text-lg">Year: {cohort.year}</p>
        <p className="text-lg">Degree: {cohort.degree}</p>
      </div>
    );
  }

  // Define a function that maps over the `cohorts` array and renders each one
  function renderCohorts() {
    return cohorts.map((cohort) => renderCohort(cohort));
  }

  // Render the component with the list of cohorts
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold my-4">All Cohorts</h1>
      {renderCohorts()}
    </div>
  );
}

// Export the component so it can be used in other files
export default AllCohorts;
