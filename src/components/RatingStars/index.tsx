import React from "react";
import { RatingContainer, StarOn, StarOff } from "./styles";

type RatingStarsProps = {
  rating: number; // 1-5
};

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  return (
    <RatingContainer>
      {Array.from({ length: 5 }).map((_, index) => {
        return index + 1 <= rating ? <StarOn /> : <StarOff />;
      })}
    </RatingContainer>
  );
};

export default RatingStars;
