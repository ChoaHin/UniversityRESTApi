import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function SingleCohort() {
  const { cohortId } = useParams();
  const [cohort, setCohort] = useState(null);
  const [students, setStudents] = useState([]);

  console.log("SingleCohort");

  useEffect(() => {
    // Fetch the cohort data from the API
    fetch(`http://127.0.0.1:8000/api/cohort/${cohortId}/`)
      .then((response) => response.json())
      .then((data) => setCohort(data))
      .catch((error) => console.log(error));

    // Fetch the students data for the cohort from the API
    fetch(`http://127.0.0.1:8000/api/student/?cohort=${cohortId}`)
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.log(error));
  }, [cohortId]);

  if (!cohort) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  const renderStudents = () => {
    return students.map((student) => (
      <li
        key={student.student_id}
        className="border-b py-4 flex justify-between items-center"
      >
        <Link to={`/student/${student.student_id}`}>
          <span className="text-lg hover:underline">
            {student.first_name} {student.last_name}
          </span>
        </Link>
        <span className="text-gray-500">{student.email}</span>
      </li>
    ));
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">
        {cohort.name} ({cohort.year})
      </h1>
      <p className="text-xl mb-4">Degree: {cohort.degree}</p>

      <h2 className="text-2xl font-bold mb-4">Students</h2>
      <ul className="divide-y">{renderStudents()}</ul>
    </div>
  );
}

export default SingleCohort;
