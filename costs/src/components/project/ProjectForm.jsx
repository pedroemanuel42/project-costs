import React from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/Submit";
import "./project-form.css";

export default function ProjectForm({ btnText }) {
  return (
    <form className="form">
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
      />
      <Select name="category-id" text="Selecione uma categoria" />
      <SubmitButton text={btnText} />
    </form>
  );
}
