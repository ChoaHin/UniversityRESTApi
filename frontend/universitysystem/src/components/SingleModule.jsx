import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleModule() {
  const { moduleCode } = useParams();
  const [module, setModule] = useState(null);

  console.log("SingleModule");

  useEffect(() => {
    // Fetch the module data from the API
    fetch(`http://127.0.0.1:8000/api/module/${moduleCode}/`)
      .then((response) => response.json())
      .then((data) => setModule(data))
      .catch((error) => console.log(error));
  }, [moduleCode]);

  if (!module) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{module.full_name}</h1>
      <p className="text-lg font-medium mb-2">Code: {module.code}</p>
      <p className="text-lg font-medium mb-2">
        Delivered to: {module.delivered_to.join(", ")}
      </p>
      <p className="text-lg font-medium mb-2">CA split: {module.ca_split}</p>
    </div>
  );
}

export default SingleModule;
