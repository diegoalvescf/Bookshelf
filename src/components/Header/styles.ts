import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  padding-right: ${RFValue(16)}px;
  padding-left: ${RFValue(24)}px;
`;

export const BackButtonContainer = styled.View`
  margin: 0 16px;
`;

export const ShareContainer = styled.View`
  position: absolute;
  right: 16px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.Lato_900};
`;

export const ImageProfileContainer = styled.View`
  position: absolute;
  right: 16px;
`;

export const ImageProfile = styled.Image`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  border-radius: 32px;
`;
