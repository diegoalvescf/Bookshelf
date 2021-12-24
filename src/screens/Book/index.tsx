import { useRoute } from "@react-navigation/native";
import React from "react";
import { IBook } from "../../common/models/overview";
import BookCard from "../../components/BookCard";
import { Header } from "../../components/Header";
import ReadNow from "../../components/ReadNow";

import { Container, Content, Footer, HeaderContainer } from "./styles";

interface Params {
  book: IBook;
}

function Book({ navigation }) {
  const route = useRoute();
  const { book } = route.params as Params;

  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Content>
        <BookCard book={book} />
      </Content>
      <Footer>
        <ReadNow title="Ler agora" />
      </Footer>
    </Container>
  );
}

export default Book;
