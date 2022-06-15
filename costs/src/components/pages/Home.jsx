import React from "react";
import LinkButton from "../layout/LinkButton";
import "./home.css";
import savings from "../../img/savings.svg";

export default function Home() {
  return (
    <section className="home-container">
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar Projeto" />
      <img src={savings} alt="Costs" />
    </section>
  );
}
