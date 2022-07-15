import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import People from "../../Assets/Peaple.svg";
import Arrow from "../../Assets/arrow.svg";

import H1 from "../../components/title"
import ContainerItens from "../../components/containerItens";
import Button from "../../components/button";

import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./style";

const App = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("https://my-first-project-node.herokuapp.com/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    history.push("/usuarios");
  }

  return (
    <Container>
      <Image alt="logo-image" src={People} />

      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

       <Button onClick={addNewUser} >
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
