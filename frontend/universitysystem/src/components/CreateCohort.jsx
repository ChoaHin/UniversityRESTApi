import { useState } from "react";

function CreateCohort() {
  // Initialize cohortData state with empty values
  const [cohortData, setCohortData] = useState({
    id: "",
    year: 1,
    degree: "",
  });

  // Handle input changes by updating the corresponding state value
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCohortData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission by sending a POST request to the API
  const handleSubmit = (event) => {
    event.preventDefault();

    // Set the degree prefix for API endpoint
    const degreePrefix = "http://127.0.0.1:8000/api/degree/";

    // Combine the prefix with the cohort's degree and create a new cohort data object
    const newCohortData = {
      ...cohortData,
      degree: degreePrefix + cohortData.degree.toUpperCase() + "/",
    };

    // Log the new cohort data
    console.log("New cohort data:", newCohortData);

    // Send a POST request with the new cohort data to the API
    fetch("http://127.0.0.1:8000/api/cohort/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCohortData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New cohort created:", data);
      })
      .catch((error) => console.log(error));
  };

  // Render the Create Cohort form
  return (
    <div className="w-full max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create New Cohort</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="id" className="block font-medium mb-2">
            Cohort ID:
          </label>
          <input
            type="text"
            id="id"
            name="id"
            value={cohortData.id}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="year" className="block font-medium mb-2">
            Year:
          </label>
          <input
            type="number"
            id="year"
            name="year"
            value={cohortData.year}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="degree" className="block font-medium mb-2">
            Degree:
          </label>
          <input
            type="text"
            id="degree"
            name="degree"
            value={cohortData.degree}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Cohort
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateCohort;
