import { useState, useEffect, useContext, useRef } from "react";
import "./Dashboard.css";

import { AppContext } from "../../context/AppContext";
import { getProjectsById } from "../../client/client";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

function Dashboard() {
  const { profile, setProjects, projects } = useContext(AppContext);
  const dashBoardRef = useRef<HTMLDivElement>(null);
  const newProjectRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [showNewProject, setShowNewProject] = useState(false);
  const [projectLoading, setProjectLoading] = useState(false);

  useEffect(() => {
    console.log(profile);
    const getProjects = async () => {
      const projectArray = await getProjectsById(profile!.id);
      console.log(projectArray);
      setProjects(projectArray);
    };
    if (profile) getProjects();
  }, [profile]);

  return (
    <div className="dashboard-container" ref={dashBoardRef}>
      <div className="dashboard-project-grid">
        {projects &&
          projects.map((p) => {
            return <ProjectCard title={p.title} description={p.description} />;
          })}
      </div>
    </div>
  );
}

export default Dashboard;
