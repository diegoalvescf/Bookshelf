import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Section = styled.View`
  width: 100%;
  flex-direction: row;

  margin-bottom: ${RFValue(32)}px;
`;

export const BookCover = styled.Image`
  width: 104px;
  height: 164px;
  border-radius: 4px;
`;

export const InfoBookContainer = styled.View`
  padding: 0 ${RFValue(16)}px;
`;

export const TitleBook = styled.Text`
  color: ${({ theme }) => theme.colors.gray1};
  font-family: ${({ theme }) => theme.fonts.Lato_700};
  font-size: ${RFValue(16)}px;

  margin-bottom: ${RFValue(8)}px;
`;

export const Author = styled.Text`
  color: ${({ theme }) => theme.colors.gray2};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.Lato_400};

  margin-bottom: ${RFValue(16)}px;
`;

export const RatinContainer = styled.View`
  flex-direction: row;

  align-items: center;

  margin-bottom: ${RFValue(22)}px;
`;

export const Rating = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.gray2};
  font-family: ${({ theme }) => theme.fonts.Lato_400};
`;

export const SectionDescriptionBook = styled.ScrollView`
  flex: 1;
`;

export const AboutBookContainer = styled.View`
  flex: 1;
  align-items: flex-start;
`;

export const AboutBook = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.gray1};
  font-family: ${({ theme }) => theme.fonts.Lato_900};

  margin-bottom: ${RFValue(16)}px;
`;

export const Description = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.gray1};
  font-family: ${({ theme }) => theme.fonts.Lato_400};
`;
