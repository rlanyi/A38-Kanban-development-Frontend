import React, { useContext } from "react";
import useApiCall from "../../hooks/useApiCall";
import Label from "./Label";
import { FilterContext } from "../../context/FilterContext";

function ProjectLabels() {
  let projectLabels = "";
  const [projectIds, setProjectIds] = useContext(FilterContext);

  const [projects, projectsAreLoading] = useApiCall(
    `${process.env["REACT_APP_SERVER"]}/projects`,
    "GET"
  );

  const addFilter = (projectId) => {
    let newProjectIds = new Array(projectIds);
    newProjectIds.push(projectId);
    setProjectIds(newProjectIds);
  };

  const deleteFilter = (projectId) => {
    let newProjectIds = new Array(projectIds);
    newProjectIds.push(projectId);
    setProjectIds(newProjectIds);
  };

  if (!projectsAreLoading && projects) {
    projectLabels = projects.map((project, index) => (
      <Label
        key={index}
        setFilter={() => addFilter(project.id)}
        deleteFilter={() => deleteFilter(project.id)}
        title={
          project.group === null
            ? project.name
            : project.group.name + "/" + project.name
        }
      />
    ));
  }

  return projectLabels;
}

export default ProjectLabels;
