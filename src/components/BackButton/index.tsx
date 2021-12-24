import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Button, Container } from "./styles";

function BackButton() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container onPress={() => handleGoBack()}>
      <Button />
    </Container>
  );
}

export default BackButton;
