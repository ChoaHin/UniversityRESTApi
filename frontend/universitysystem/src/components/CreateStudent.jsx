import React, { useState } from "react";

function CreateStudent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cohort, setCohort] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const studentData = {
      first_name: firstName,
      last_name: lastName,
      cohort: cohort,
    };

    const cohort_prefix = "http://127.0.0.1:8000/api/cohort/"; // added desired prefix here
    const newStudentData = {
      ...studentData,
      cohort: cohort_prefix + studentData.cohort.toUpperCase() + "/", // added the prefix to the cohort ID
    };

    console.log("New student data:", newStudentData); // added this line to log the new cohort data

    fetch("http://127.0.0.1:8000/api/student/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudentData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("New student created successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create a new student</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="first_name"
          >
            First name:
          </label>
          <input
            type="text"
            id="first_name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="last_name"
          >
            Last name:
          </label>
          <input
            type="text"
            id="last_name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="cohort"
          >
            Cohort:
          </label>
          <input
            type="text"
            id="cohort"
            value={cohort}
            onChange={(event) => setCohort(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create student
        </button>
      </form>
    </div>
  );
}

export default CreateStudent;
