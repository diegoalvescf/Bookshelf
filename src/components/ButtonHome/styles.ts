import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import HomeIcon from "../../common/assets/home.svg";

export const Container = styled(TouchableOpacity)``;

export const Home = styled(HomeIcon)`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
`;
