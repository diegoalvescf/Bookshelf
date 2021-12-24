import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const HeaderContainer = styled.View`
  margin-top: ${getStatusBarHeight() + RFValue(36)}px;
  margin-bottom: ${RFValue(36)}px;
`;

export const Content = styled.View`
  flex: 1;
  margin-left: ${RFValue(16)}px;
  margin-bottom: ${getBottomSpace() + RFValue(10)}px;
`;

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.Lato_900};
`;

export const SectionContainer = styled.View`
  margin-top: ${RFValue(36)}px;
`;

export const Teste = styled.View`
  margin-bottom: 24px;
`;
