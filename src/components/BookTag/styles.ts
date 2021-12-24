import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray4};
  border-radius: 4px;

  padding: 5px 8px;
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.gray2};
  font-family: ${({ theme }) => theme.fonts.Lato_400};
  margin-bottom: 4px;
`;
