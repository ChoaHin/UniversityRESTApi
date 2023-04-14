import React, { useState } from "react";

function CreateDegree() {
  const [degreeData, setDegreeData] = useState({
    full_name: "",
    shortcode: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDegreeData({ ...degreeData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/api/degree/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(degreeData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New degree created:", data);
        setDegreeData({ full_name: "", shortcode: "" });
      })
      .catch((error) => {
        console.error("Error creating new degree:", error);
      });
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create New Degree</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="full_name" className="block font-medium mb-2">
            Full Name:
          </label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            value={degreeData.full_name}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="shortcode" className="block font-medium mb-2">
            Shortcode:
          </label>
          <input
            type="text"
            id="shortcode"
            name="shortcode"
            value={degreeData.shortcode}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateDegree;
