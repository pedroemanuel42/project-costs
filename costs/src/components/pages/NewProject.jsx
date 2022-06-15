import React from "react";
import ProjectForm from "../project/ProjectForm";
import "./new-project.css";

export default function NewProject() {
  return (
    <div className="new-project-container">
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm />
    </div>
  );
}
