import React from "react";
import { useLocation } from "react-router-dom";

import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

import "./projects.css";

export default function Projects() {
  const location = useLocation();
  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className="project-container">
      <div className="title-container">
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar projeto"/>
      </div>
      {message && <Message msg={message} type="success" />}
      <Container customClass='start'>
        <p>projetos...</p>
      </Container>
    </div>
  );
}
