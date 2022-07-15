import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import Avatar from "../../Assets/Avatar.svg";
import Arrow from "../../Assets/arrow.svg";
import Trash from "../../Assets/Trash.svg";

import { H1 } from "../../components/title/style";
import ContainerItens from "../../components/containerItens";
import Button from "../../components/button";

import { Container, Image, User } from "./style";

const Users = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("https://my-first-project-node.herokuapp.com/users");
      setUsers(newUsers);
    }

    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`https://my-first-project-node.herokuapp.com/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  function goBackPage() {
    history.push("/");
  }

  return (
    <Container>
      <Image alt="logo-image" src={Avatar} />

      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name} </p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="Lata-de-lixo" src={Trash} />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          <img alt="seta" src={Arrow} /> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;
