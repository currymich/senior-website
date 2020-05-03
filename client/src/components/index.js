import styled from "styled-components";

import SchoolSelector from './SchoolSelector'
import StudentList from './StudentList'

const StudentName = styled.h1`
  color: #ea6045;
  font-size: 100px;
  line-height: 148px;
  letter-spacing 0.05em;
  text-transform: uppercase;
`;

const SchoolName = StudentName;


export { StudentName, SchoolName, SchoolSelector, StudentList };
