import { useEffect, useState } from "react";

function AllModules() {
  const [modules, setModules] = useState([]);

  console.log("AllModules");

  useEffect(() => {
    // Fetch all modules from the API
    fetch(`http://127.0.0.1:8000/api/module/`)
      .then((response) => response.json())
      .then((data) => setModules(data))
      .catch((error) => console.log(error));
  }, []);

  const renderModuleList = () => {
    return modules.map((module) => (
      <li key={module.code}>
        <a
          href={`/modules/${module.code}`}
          className="text-blue-500 hover:underline"
        >
          {module.full_name}
        </a>
      </li>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">All Modules</h1>
      <ul className="list-disc pl-4">{renderModuleList()}</ul>
    </div>
  );
}

export default AllModules;
