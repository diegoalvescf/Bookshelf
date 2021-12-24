import React, { useMemo } from "react";
import { IBook } from "../../common/models/overview";
import BookTag from "../BookTag";
import RatingStars from "../RatingStars";

import {
  Container,
  Section,
  BookCover,
  InfoBookContainer,
  TitleBook,
  Author,
  Rating,
  SectionDescriptionBook,
  AboutBook,
  Description,
  RatinContainer,
  AboutBookContainer,
} from "./styles";

interface BookCardProps {
  book: IBook;
}

function BookCard({ book }: BookCardProps) {
  const rating = useMemo(() => Math.round(Math.random() * 4) + 1, []);

  return (
    <Container>
      <Section>
        <BookCover source={{ uri: book.book_image }} />

        <InfoBookContainer>
          <TitleBook>{book.title}</TitleBook>

          <Author>{book.author}</Author>

          <RatinContainer>
            <RatingStars rating={rating} />

            <Rating>36 Avaliações</Rating>
          </RatinContainer>
          <AboutBookContainer>
            <BookTag title="Não Ficção" />
            <BookTag title="Literatura estrangeira" />
          </AboutBookContainer>
        </InfoBookContainer>
      </Section>

      <SectionDescriptionBook>
        <AboutBook>Sobre esse livro</AboutBook>

        <Description>{book.description}</Description>
      </SectionDescriptionBook>
    </Container>
  );
}

export default BookCard;
