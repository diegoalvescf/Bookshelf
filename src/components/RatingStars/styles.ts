import styled from "styled-components/native";

import StarOnIcon from "../../common/assets/StarOn.svg";
import StarOffIcon from "../../common/assets/StarOff.svg";

export const RatingContainer = styled.View`
  width: 58px;
  flex-direction: row;
  margin-right: 2px;
`;

export const StarOn = styled(StarOnIcon)`
  width: 10px;
  height: 10px;
`;

export const StarOff = styled(StarOffIcon)`
  width: 10px;
  height: 10px;
`;
