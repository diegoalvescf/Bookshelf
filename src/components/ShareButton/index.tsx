import React from "react";
import { TouchableOpacityProps } from "react-native";

import {
  Container,
  Heart,
  HeartContainer,
  Share,
  ShareContainer,
} from "./styles";

function ShareButton() {
  return (
    <Container>
      <HeartContainer onPress={() => {}}>
        <Heart />
      </HeartContainer>
      <ShareContainer onPress={() => {}}>
        <Share />
      </ShareContainer>
    </Container>
  );
}

export default ShareButton;
