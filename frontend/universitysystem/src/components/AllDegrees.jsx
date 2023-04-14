import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Define a React component called AllDegrees
function AllDegrees() {
  // Use the useState hook to define a degrees state variable, initially set to an empty array
  const [degrees, setDegrees] = useState([]);

  // Use the useEffect hook to fetch data from the API endpoint when the component is mounted
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/degree/")
      .then((response) => response.json())
      .then((data) => {
        setDegrees(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Define a function that returns a list of degree elements
  const displayDegrees = () => {
    return degrees.map((elem) => (
      <li key={elem.shortcode}>
        <Link
          to={`/degrees/${elem.shortcode}`}
          className="block px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200"
        >
          {elem.full_name}
        </Link>
      </li>
    ));
  };

  // Render the list of degrees using JSX
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Degrees</h1>
      <ul>{displayDegrees()}</ul>
    </div>
  );
}

// Export the AllDegrees component as the default export of this module
export default AllDegrees;
