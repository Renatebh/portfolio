import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        <li>
          <Link to="/">Hjem</Link>
        </li>
        <li>
          <Link to="/projects">Prosjekter</Link>
        </li>
        <li>
          <Link to="/cv">CV</Link>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
