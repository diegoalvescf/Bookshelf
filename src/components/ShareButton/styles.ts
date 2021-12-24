import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import HeartIcon from "../../common/assets/Heart.svg";
import ShareIcon from "../../common/assets/share.svg";

export const Container = styled.View`
  flex-direction: row;
`;

export const HeartContainer = styled(TouchableOpacity)``;

export const ShareContainer = styled(TouchableOpacity)``;

export const Heart = styled(HeartIcon)`
  width: 24px;
  height: 24px;
  margin-right: ${RFValue(16)}px;
`;

export const Share = styled(ShareIcon)`
  width: 24px;
  height: 24px;
`;
