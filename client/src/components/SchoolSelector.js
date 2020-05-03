import React from "react";
import styled from "styled-components";

const schoolList = ["Skyline High School", "Oakland Tech", "Alameda High"];

const SchoolOption = styled.div`
  font-size: 18px;
  cursor: pointer;
  text-transform: uppercase;

  color: #919191;

  &&.selected {
    color: #ea6045;
  }
`;

const SchoolSelector = ({ selectSchool, selectedSchool }) => {
  const handleSelectSchool = newSchool => {
    if(selectedSchool === newSchool) {
      selectSchool(null)
    } else {
      selectSchool(newSchool)
    }
  }

  return (
    <div>
      {schoolList.map((school) => (
        <SchoolOption
          onClick={() => handleSelectSchool(school)}
          className={selectedSchool === school ? "selected" : ""}
        >
          {school}
        </SchoolOption>
      ))}
    </div>
  );
};

export default SchoolSelector;
