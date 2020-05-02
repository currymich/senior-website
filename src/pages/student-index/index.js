import React, { useState } from "react";

import StudentIndexView from "./view";

const listOfStudents = [
  {
    firstName: "Corrie",
    lastName: "Kim",
    id: "corrie-kim",
    school: "Oakland Tech",
  },
  {
    firstName: "Harry",
    lastName: "Zhu",
    id: "harry-zhu",
    school: "Oakland Tech",
  },
  {
    firstName: "Alberto",
    lastName: "Dominguez",
    id: "alberto-dominguez",
    school: "Skyline High School",
  },
  {
    firstName: "Johnny",
    lastName: "Suh",
    id: "johnny-suh",
    school: "Alameda High",
  },
];

const StudentIndexContainer = () => {
  // fetch all from database here
  const [selectedSchool, setSelectedSchool] = useState(null);

  const students = listOfStudents.filter((student) => {
    if (selectedSchool) {
      return student.school === selectedSchool;
    }

    // if no school selected, return all students
    return true;
  });

  return (
    <StudentIndexView
      selectedSchool={selectedSchool}
      selectSchool={setSelectedSchool}
      students={students}
    />
  );
};

export default StudentIndexContainer;
