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
  margin: 0 ${RFValue(16)}px;
  margin-bottom: ${getBottomSpace() + RFValue(10)}px;
`;

export const Footer = styled.View`
  margin-bottom: ${RFValue(16)}px;
  padding: 0 ${RFValue(16)}px;
`;
