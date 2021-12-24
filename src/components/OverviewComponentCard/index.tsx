import React, { useMemo } from "react";
import { TouchableOpacityProps } from "react-native";

import { IBook } from "../../common/models/overview";
import RatingStars from "../RatingStars";

import { Author, BookCover, Container, TitleBook } from "./styles";

interface OverviewProps extends TouchableOpacityProps {
  book: IBook;
  onPress: () => void;
}

function OverviewComponentCard({ book, onPress }: OverviewProps) {
  const rating = useMemo(() => Math.round(Math.random() * 4) + 1, []);

  return (
    <Container onPress={onPress}>
      {book?.book_image && <BookCover source={{ uri: book.book_image }} />}
      {book?.title && <TitleBook>{book.title}</TitleBook>}
      {book?.author && <Author>{book.author}</Author>}

      <RatingStars rating={rating} />
    </Container>
  );
}

export default OverviewComponentCard;
