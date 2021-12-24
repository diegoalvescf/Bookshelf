import React from "react";
import { IUser } from "../../common/models/user";
import BackButton from "../BackButton";
import ShareButton from "../ShareButton";

import {
  BackButtonContainer,
  Container,
  ImageProfile,
  ImageProfileContainer,
  ShareContainer,
  Title,
} from "./styles";

interface Props {
  title?: string;
  profile?: IUser;
  right?: React.ReactNode;
  hideBackButton?: boolean;
  hideShareIcon?: boolean;
}

export function Header({
  title,
  profile,
  right,
  hideBackButton,
  hideShareIcon,
}: Props) {
  return (
    <Container>
      {!hideBackButton && (
        <BackButtonContainer>
          <BackButton />
        </BackButtonContainer>
      )}

      {!!title && <Title>{title}</Title>}

      {right
        ? right
        : !!profile?.image && (
            <ImageProfileContainer>
              <ImageProfile
                source={{ uri: profile.image }}
                resizeMode="contain"
              />
            </ImageProfileContainer>
          )}

      {!hideShareIcon && (
        <ShareContainer>
          <ShareButton />
        </ShareContainer>
      )}
    </Container>
  );
}

export default Header;
