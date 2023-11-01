import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  text-align: center; // Center the text
  margin-top: 30px;
  margin-bottom: 20px;
`;

const ProjectsTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
`;

const ProjectBoxesContainer = styled.div`
  display: flex;
  justify-content: space-between; // Adjust as needed
  margin: 0 auto; // Center the container
  max-width: 1100px;
  flex-wrap: wrap; // Wrap the boxes to the next line on smaller screens
  gap: 20px; // Adjust the gap between the boxes
`;

const ProjectBox = styled.div`
  width: calc(33.33% - 20px); // Adjust the width and gap
  background: ${({ theme }) => theme.card_light};
  border: 2px solid #e55604;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    width: calc(50% - 20px); // Adjust for smaller screens
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    width: 100%; // Full width on even smaller screens
    padding: 10px 36px;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary + 80};
  text-align: center;
`;

const Projects = () => {
  return (
    <div>
      <ProjectsContainer>
        <ProjectsTitle>My Projects</ProjectsTitle>
      </ProjectsContainer>
      <ProjectBoxesContainer>
        <ProjectBox>
          <ProjectTitle>Keeper</ProjectTitle>
          <ProjectDescription>
          Keeper is a project that utilizes the React JavaScript library to create a note-taking or to-do list application. Users can add, edit, and delete notes or tasks in an interactive and user-friendly interface.
          <br/>
          Link: <a href="https://j2376s.csb.app/">https://j2376s.csb.app/</a>
          </ProjectDescription>
        </ProjectBox>
        <ProjectBox>
          <ProjectTitle>Invoice Generator</ProjectTitle>
          <ProjectDescription>
          It allows users to input relevant invoice details, such as client information, itemized charges, and payment terms, and then automatically generates professional-looking invoices. 
          </ProjectDescription>
        </ProjectBox>
        <ProjectBox>
          <ProjectTitle>Power in hand</ProjectTitle>
          <ProjectDescription>
          It is a project that leverages GSM technology to enable remote control and automation of various home appliances and systems. Users can send commands or receive status updates through text messages or mobile applications.
          </ProjectDescription>
        </ProjectBox>
      </ProjectBoxesContainer>
    </div>
  );
};

export default Projects;
