import React from "react";

import {StudentName} from '../../components'

const StudentDetailView = ({ student }) => {
  const { firstName, lastName } = student;
  return (
    <div>
      <StudentName>
        {firstName} {lastName}
      </StudentName>
    </div>
  );
};

export default StudentDetailView;
