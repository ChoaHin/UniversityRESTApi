import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ModulesForCohort() {
  // Get the cohort ID from the URL parameter using the useParams hook
  const { cohortId } = useParams();

  // Set up a state variable for the list of modules, initialized to an empty array
  const [modules, setModules] = useState([]);

  // Use the useEffect hook to fetch the modules from the API when the component is mounted
  // or when the cohort ID changes
  useEffect(() => {
    // Make an API request to get the modules for the specified cohort ID
    fetch(`http://127.0.0.1:8000/api/module/?delivered_to=${cohortId}`)
      .then((response) => response.json())
      .then((data) => setModules(data));
  }, [cohortId]);

  // Render the list of modules
  return (
    <div className="py-8 px-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Modules for Cohort {cohortId}</h1>
      <ul>
        {/* Map over the list of modules and render each module as a list item */}
        {modules.map((module) => (
          <li key={module.code} className="mb-4">
            <h2 className="text-xl font-bold">{module.full_name}</h2>
            <p className="text-gray-600">Code: {module.code}</p>
            <p className="text-gray-600">CA Split: {module.ca_split}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModulesForCohort;
