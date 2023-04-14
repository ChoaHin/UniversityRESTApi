import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function SingleDegree() {
  const { degreeId } = useParams();
  const [degree, setDegree] = useState(null);
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    // Fetch the degree data from the API
    fetch(`http://127.0.0.1:8000/api/degree/${degreeId}/`)
      .then((response) => response.json())
      .then((data) => setDegree(data))
      .catch((error) => console.log(error));

    // Fetch the cohorts data for the degree from the API
    fetch(`http://127.0.0.1:8000/api/cohort/?degree=${degreeId}`)
      .then((response) => response.json())
      .then((data) => setCohorts(data))
      .catch((error) => console.log(error));
  }, [degreeId]);

  if (!degree) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{degree.full_name}</h1>
      <p className="text-gray-600 mb-6">Shortcode: {degree.shortcode}</p>

      <h2 className="text-2xl font-bold mb-2">Cohorts</h2>
      <ul>
        {cohorts.map((cohort) => (
          <li key={cohort.id} className="text-lg mb-1">
            <Link
              to={`/cohorts/${cohort.id}`}
              className="block px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200"
            >
              {cohort.name} ({cohort.year})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SingleDegree;
