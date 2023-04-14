import React, { useState } from "react";

function CreateModule() {
  const [code, setCode] = useState("");
  const [fullName, setFullName] = useState("");
  const [deliveredTo, setDeliveredTo] = useState("");
  const [caSplit, setCaSplit] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const moduleData = {
      code: code,
      full_name: fullName,
      delivered_to: [deliveredTo],
      ca_split: Number(caSplit),
    };

    const cohort_prefix = "http://127.0.0.1:8000/api/cohort/"; // added desired prefix here
    const deliveredToList = moduleData.delivered_to.map(
      (cohort) => cohort_prefix + cohort.toUpperCase() + "/"
    );

    const newModuleData = {
      ...moduleData,
      delivered_to: deliveredToList,
    };

    console.log("New module data:", newModuleData); // added this line to log the new cohort data
    // console.log(moduleData);
    fetch("http://127.0.0.1:8000/api/module/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newModuleData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create a new module</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="code" className="block font-medium mb-2">
            Code:
          </label>
          <input
            type="text"
            id="code"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fullName" className="block font-medium mb-2">
            Full name:
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="deliveredTo" className="block font-medium mb-2">
            Delivered to:
          </label>
          <input
            type="text"
            id="deliveredTo"
            value={deliveredTo}
            onChange={(event) => setDeliveredTo(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="caSplit" className="block font-medium mb-2">
            CA split:
          </label>
          <input
            type="number"
            id="caSplit"
            value={caSplit}
            onChange={(event) => setCaSplit(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create module
        </button>
      </form>
    </div>
  );
}

export default CreateModule;
