import React from "react";
import { Link } from "react-router-dom";

// Define a functional component called Homepage
function Homepage() {
  // Return the following JSX code to be rendered on the page
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <h1 className="text-4xl font-bold mt-8 mb-4">
        Welcome to the University System
      </h1>
      {/* List of links to different degree pages */}
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <h2 className="text-2xl font-bold mb-2">Degrees</h2>
          <ul className="list-disc pl-4">
            <li className="mb-2">
              <Link to="/degrees" className="text-blue-600 hover:underline">
                View all degrees
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/degrees/COMSCI"
                className="text-blue-600 hover:underline"
              >
                View computer science degree
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/create-degree"
                className="text-blue-600 hover:underline"
              >
                Create a new degree
              </Link>
            </li>
          </ul>
        </div>
        {/* List of links to different cohort pages */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <h2 className="text-2xl font-bold mb-2">Cohorts</h2>
          <ul className="list-disc pl-4">
            <li className="mb-2">
              <Link to="/cohorts" className="text-blue-600 hover:underline">
                View all cohorts
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/cohorts/COMSCI1"
                className="text-blue-600 hover:underline"
              >
                View computer science 1st year cohort
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/create-cohort"
                className="text-blue-600 hover:underline"
              >
                Create a new cohort
              </Link>
            </li>
          </ul>
        </div>
        {/* List of links to different module pages */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <h2 className="text-2xl font-bold mb-2">Modules</h2>
          <ul className="list-disc pl-4">
            <li className="mb-2">
              <Link to="/modules" className="text-blue-600 hover:underline">
                View all modules
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/modules/CA298"
                className="text-blue-600 hover:underline"
              >
                View module CA298
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/cohorts/COMSCI2/modules"
                className="text-blue-600 hover:underline"
              >
                View modules delivered to computer science 2nd year cohort
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/create-module"
                className="text-blue-600 hover:underline"
              >
                Create a new module
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <h2 className="text-2xl font-bold mb-2">Students</h2>
          <ul className="list-disc pl-4">
            <li className="mb-2">
              <Link
                to="/student/26870106"
                className="text-blue-600 hover:underline"
              >
                View student 26870106
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/create-student"
                className="text-blue-600 hover:underline"
              >
                Create a new student
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/set-grade" className="text-blue-600 hover:underline">
                Set a student's grade for a module
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
