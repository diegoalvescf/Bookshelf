import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

interface ReadNowProps extends TouchableOpacityProps {
  title: string;
}

function ReadNow({ title }: ReadNowProps) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}

export default ReadNow;
