import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Home } from "./styles";

interface Props extends TouchableOpacityProps {
  onPress: () => void;
}

function ButtonHome({ onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Home />
    </Container>
  );
}

export default ButtonHome;
