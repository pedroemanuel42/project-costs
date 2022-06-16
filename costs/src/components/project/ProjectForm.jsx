import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/Submit";
import "./project-form.css";

export default function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

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
      <Select
        name="category-id"
        text="Selecione uma categoria"
        options={categories}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}
