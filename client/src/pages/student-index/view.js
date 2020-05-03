import React from "react";

import { SchoolName, SchoolSelector, StudentList } from "../../components";

const StudentIndexView = ({ selectedSchool, selectSchool, students }) => {
  return (
    <div style={{ display: "flex" }}>
      <SchoolSelector
        selectSchool={selectSchool}
        selectedSchool={selectedSchool}
      />
      <div>
        <SchoolName>{selectedSchool || "Class of 2020"}</SchoolName>
        <StudentList students={students} />
      </div>
    </div>
  );
};

export default StudentIndexView;
