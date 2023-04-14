import React, { useState } from "react";

function SetGrade() {
  // Declare state variables for the form fields
  const [module, setModule] = useState("");
  const [caMark, setCaMark] = useState("");
  const [examMark, setExamMark] = useState("");
  const [cohort, setCohort] = useState("");
  const [student, setStudent] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create grade data object with form field values
    const gradeData = {
      module: module,
      ca_mark: Number(caMark),
      exam_mark: Number(examMark),
      cohort: cohort,
      student: student,
    };

    // Set prefixes for API endpoints
    const modulePrefix = "http://127.0.0.1:8000/api/module/";
    const cohortPrefix = "http://127.0.0.1:8000/api/cohort/";
    const studentPrefix = "http://127.0.0.1:8000/api/student/";

    // Add prefixes to grade data object
    const newGradeData = {
      ...gradeData,
      module: modulePrefix + gradeData.module.toUpperCase() + "/",
      cohort: cohortPrefix + gradeData.cohort.toUpperCase() + "/",
      student: studentPrefix + gradeData.student.toUpperCase() + "/",
    };

    // Log new grade data object to console
    console.log("New grade data:", newGradeData);

    // Send POST request to API endpoint with grade data
    fetch("http://127.0.0.1:8000/api/grade/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGradeData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Grade set successfully.");
          alert("Grade set successfully");
        } else {
          console.log("Error setting grade.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Render the form
  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-3xl font-bold mb-8">Set grade for a module</h1>
      <form onSubmit={handleSubmit} className="w-1/2">
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="module">
            Module:
          </label>
          <input
            id="module"
            type="text"
            value={module}
            onChange={(event) => setModule(event.target.value)}
            className="w-full px-3 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="caMark">
            CA mark:
          </label>
          <input
            id="caMark"
            type="number"
            value={caMark}
            onChange={(event) => setCaMark(event.target.value)}
            className="w-full px-3 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="examMark">
            Exam mark:
          </label>
          <input
            id="examMark"
            type="number"
            value={examMark}
            onChange={(event) => setExamMark(event.target.value)}
            className="w-full px-3 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="cohort">
            Cohort:
          </label>
          <input
            id="cohort"
            type="text"
            value={cohort}
            onChange={(event) => setCohort(event.target.value)}
            className="w-full px-3 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="student">
            Student:
          </label>
          <input
            id="student"
            type="text"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
            className="w-full px-3 py-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Set Grade
        </button>
      </form>
    </div>
  );
}

export default SetGrade;
