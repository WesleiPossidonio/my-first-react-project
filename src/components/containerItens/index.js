import React from "react";

import { ContainerItems as Container } from "./style";
const ContainerItens = ({ children, isBlur }) => {
  return <Container isBlur={isBlur}>{children}</Container>;
};

export default ContainerItens;
