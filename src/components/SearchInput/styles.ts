import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import SearchIcon from "../../common/assets/search.svg";

export const Container = styled.View`
  width: 100%;
  height: 56px;

  flex-direction: row;

  border-width: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.gray0};

  justify-content: space-between;
  align-items: center;

  padding-right: 32px;
`;

export const Input = styled(TextInput)`
  width: 100%;

  font-size: ${RFValue(14)}px;

  padding: 0 16px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.gray3};
    font-size: ${RFValue(14)}px;
  }
`;

export const Search = styled(SearchIcon)`
  width: ${RFValue(9)}px;
  height: ${RFValue(9)}px;
`;
