import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100px;
  margin-right: 15px;
`;

export const BookCover = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 4px;
`;

export const TitleBook = styled.Text`
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.Lato_700};
`;

export const Author = styled.Text`
  margin-top: 2px;
  margin-bottom: 2px;
  color: ${({ theme }) => theme.colors.gray2};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.Lato_400};
`;
