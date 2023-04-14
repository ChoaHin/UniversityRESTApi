import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleStudent(props) {
  const { studentId } = useParams();
  const [student, setStudent] = useState(null);
  const [modules, setModules] = useState([]);
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/student/${studentId}/`)
      .then((response) => response.json())
      .then((data) => setStudent(data));
  }, [studentId]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/module/?student=${studentId}`)
      .then((response) => response.json())
      .then((data) => {
        setModules(data);
      });
  }, [studentId, setModules]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/grade/?student=${studentId}`)
      .then((response) => response.json())
      .then((data) => {
        setGrades(data);
      });
  }, [studentId, setGrades]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Student Details</h1>
      <h2 className="text-2xl font-semibold my-4">
        {student.first_name} {student.last_name}
      </h2>
      <p className="my-2">
        ID: <span className="font-semibold">{student.student_id}</span>
      </p>
      <p className="my-2">
        Email: <span className="font-semibold">{student.email}</span>
      </p>

      <h2 className="text-2xl font-semibold my-4">Grades</h2>
      <table className="table-auto w-full mb-8">
        <thead>
          <tr>
            <th className="text-left px-4 py-2">Module</th>
            <th className="text-left px-4 py-2">CA Mark</th>
            <th className="text-left px-4 py-2">Exam Mark</th>
            <th className="text-left px-4 py-2">Total Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade) => {
            const moduleCode = grade.module.split("/").slice(-2, -1)[0]; // extract module code from URL
            const module = modules.find((m) => m.code === moduleCode); // find corresponding module object
            const moduleName = module ? module.full_name : ""; // extract full name if module exists
            return (
              <tr key={`${grade.id}-${studentId}`}>
                <td className="border px-4 py-2">{moduleName}</td>
                <td className="border px-4 py-2">{grade.ca_mark}</td>
                <td className="border px-4 py-2">{grade.exam_mark}</td>
                <td className="border px-4 py-2">{grade.total_grade}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold my-4">Modules Registered For</h2>
      <ul className="list-disc list-inside">
        {modules.map((module) => (
          <li key={module.code}>
            <a
              href={`/modules/${module.code}`}
              className="text-blue-600 hover:text-blue-800"
            >
              {module.full_name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SingleStudent;
