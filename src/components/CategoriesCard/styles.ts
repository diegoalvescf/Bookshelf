import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  flex: 1;
  margin-right: 12px;
  width: ${RFValue(74)}px;
`;

export const Rectangle = styled.View`
  width: 74px;
  height: 74px;
  border-radius: 4px;
`;

export const Title = styled.Text`
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.Lato_700};
`;
