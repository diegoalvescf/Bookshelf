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
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
`;

export const SearchContainer = styled.View`
  width: 100%;

  margin-top: 16px;

  padding: 0 16px;
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 0 16px;
`;

export const SectionForYou = styled.View`
  margin-top: 24px;
`;

export const Section = styled.View`
  margin-top: 32px;
`;

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.Lato_900};
`;

export const SectionContainer = styled.View`
  margin-top: 16px;
`;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: ${getBottomSpace() + RFValue(18)}px;
`;
