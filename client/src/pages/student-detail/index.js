import React from "react";
import { useParams } from "react-router-dom";

import StudentDetailView from "./view";

const StudentDetailContainer = () => {
  // good place for fetching from the database, but for now just mock data
  const { studentId } = useParams();

  const split = studentId.split("-");

  const mockStudent = {
    firstName: split[0],
    lastName: split[1],
  };

  return <StudentDetailView student={mockStudent} />;
};

export default StudentDetailContainer;
