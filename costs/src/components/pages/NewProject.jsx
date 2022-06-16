import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectForm from "../project/ProjectForm";
import "./new-project.css";

export default function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    // Initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //redirect
        navigate("/projects", { message: "Projeto criado com sucesso!" });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="new-project-container">
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm btnText="Criar Projeto" handleSubmit={createPost} />
    </div>
  );
}
