import React from "react";
import styled from "styled-components";

import history from "../history";

import defaultAvatar from "../images/default-avatar.png";

const StyledImage = styled.img`
  width: 220px;
  height: 220px;
  cursor: pointer;
  ${(props) => props.name && `alt: ${props.name}`}
  background-color: #6cf;
`;

const StudentImage = ({ student }) => {
  const { firstName, lastName, imgUrl, id } = student;

  return (
    <div style={{display: 'flex', flexFlow: 'column', alignItems: 'center'}}>
      <StyledImage
        src={imgUrl || defaultAvatar}
        name={`${firstName} ${lastName}`}
        onClick={() => history.push(`/students/${id}`)}
      />
      <h4>
        {firstName} {lastName}
      </h4>
    </div>
  );
};

const StudentList = ({ students }) => {
  return (
    <div style={{display: 'flex'}}>
      {students.map((student) => (
        <StudentImage student={student} />
      ))}
    </div>
  );
};

export default StudentList;
