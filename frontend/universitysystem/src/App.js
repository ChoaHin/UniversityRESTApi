import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllDegrees from "./components/AllDegrees";
import Homepage from "./components/Homepage";
import SingleDegree from "./components/SingleDegree";
import CreateDegree from "./components/CreateDegree";
import AllCohorts from "./components/AllCohorts";
import SingleCohort from "./components/SingleCohort";
import CreateCohort from "./components/CreateCohort";
import AllModules from "./components/AllModules";
import SingleModule from "./components/SingleModule";
import ModulesForCohort from "./components/ModulesForCohort";
import CreateModule from "./components/CreateModule";
import SingleStudent from "./components/SingleStudent";
import CreateStudent from "./components/CreateStudent";
import SetGrade from "./components/SetGrade";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/degrees" element={<AllDegrees />} />
          <Route path="/degrees/:degreeId" element={<SingleDegree />} />
          <Route path="/create-degree" element={<CreateDegree />} />
          <Route path="/cohorts" element={<AllCohorts />} />
          <Route path="/cohorts/:cohortId" element={<SingleCohort />} />
          <Route path="/create-cohort" element={<CreateCohort />} />
          <Route path="/modules" element={<AllModules />} />
          <Route path="/modules/:moduleCode" element={<SingleModule />} />
          <Route
            path="/cohorts/:cohortId/modules"
            element={<ModulesForCohort />}
          />
          <Route path="/create-module" element={<CreateModule />} />
          <Route path="/student/:studentId" element={<SingleStudent />} />
          <Route path="/create-student" element={<CreateStudent />} />
          <Route path="/set-grade/" element={<SetGrade />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
